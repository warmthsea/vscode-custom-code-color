/* IMPORT */

import * as vscode from 'vscode'
import type { UserSettingType } from './type'

/* CONFIG */

const Config = {

  get(extension = 'vscodeCustomCodeColor') {
    return vscode.workspace.getConfiguration().get(extension) as UserSettingType
  },

}

/* EXPORT */

export default Config
