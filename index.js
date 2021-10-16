const { app, BrowserWindow } = require('electron')
const { createWindow } = require('./app/window')
const menubar = require('./app/menubar')

let browser = null

app.whenReady().then(() => {
  
  browser = createWindow()
  menubar.init()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
