import * as vscode from 'vscode'
import Config from './config'

export function activate(context: vscode.ExtensionContext) {
  const config = Config.get()

  const decorationType = vscode.window.createTextEditorDecorationType({
    color: config.highlightValueColor, // 设置颜色
  })

  // 通过 conquistador 插件获取默认激活的编辑器
  const activeEditor = vscode.window.visibleTextEditors.find(editor => editor.document)

  if (activeEditor && isPickFile(activeEditor))
    updateDecorations(activeEditor, decorationType)

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor && isPickFile(editor))
        updateDecorations(editor, decorationType)
    }),
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (vscode.window.activeTextEditor && isPickFile(vscode.window.activeTextEditor) && event.document === vscode.window.activeTextEditor.document)
        updateDecorations(vscode.window.activeTextEditor, decorationType)
    }),
  )
}

function isPickFile(editor: vscode.TextEditor) {
  const config = Config.get()
  return config.fileLanguageIdList.includes(editor.document.languageId)
}

function updateDecorations(editor: vscode.TextEditor, decorationType: vscode.TextEditorDecorationType) {
  const config = Config.get()

  const text = editor.document.getText()
  const regex = new RegExp(config.highlightValue, 'g')

  const ranges = []
  let match
  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(text))) {
    const startPos = editor.document.positionAt(match.index)
    const endPos = editor.document.positionAt(match.index + match[0].length)
    const range = new vscode.Range(startPos, endPos)
    ranges.push(range)
  }

  editor.setDecorations(decorationType, ranges)
}

export function deactivate() {}
