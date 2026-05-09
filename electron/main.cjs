const { app, BrowserWindow, ipcMain, shell, Menu, dialog } = require('electron')
const path = require('path')
const fs = require('fs')

let mainWindow

function createWindow() {
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs')
    },
    title: '人格解码器',
    backgroundColor: '#0f172a',
    show: false
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.setTitle(app.getName())
    mainWindow.show()
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('save-file', async (event, filename, dataUrl) => {
  try {
    const { filePath } = await dialog.showSaveDialog(mainWindow, {
      defaultPath: filename,
      filters: [
        { name: 'Images', extensions: ['png', 'jpg'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    })

    if (filePath) {
      const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '')
      const buffer = Buffer.from(base64Data, 'base64')
      fs.writeFileSync(filePath, buffer)
      return { success: true, path: filePath }
    }
    return { success: false, message: '取消保存' }
  } catch (error) {
    return { success: false, message: error.message }
  }
})

ipcMain.handle('get-user-data-path', () => {
  return app.getPath('userData')
})
