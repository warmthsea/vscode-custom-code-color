import type { ExtensionContext, TextEditorDecorationType } from 'vscode'
import * as vscode from 'vscode'

export function activate(context: ExtensionContext) {
  const decorationType = vscode.window.createTextEditorDecorationType({
    color: '#6366f1', // 设置颜色
  })

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor && isVueFile(editor))
        updateDecorations(editor, decorationType)
    }),
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (vscode.window.activeTextEditor && isVueFile(vscode.window.activeTextEditor) && event.document === vscode.window.activeTextEditor.document)
        updateDecorations(vscode.window.activeTextEditor, decorationType)
    }),
  )
}

function isVueFile(editor: any) {
  return editor.document.languageId === 'vue'
}

function updateDecorations(editor: any, decorationType: TextEditorDecorationType) {
  const text = editor.document.getText()
  const regex = /v-role/g

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
