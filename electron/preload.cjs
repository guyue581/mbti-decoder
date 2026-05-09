const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  saveFile: (filename, dataUrl) => ipcRenderer.invoke('save-file', filename, dataUrl),
  getUserDataPath: () => ipcRenderer.invoke('get-user-data-path')
})
