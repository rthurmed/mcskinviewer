const { Menu, MenuItem, BrowserWindow } = require('electron');
const { openFile } = require('./file');
const { createWindow } = require('./window');

const ctrlKey = process.platform == 'darwin' ? 'Cmd' : 'Ctrl'

function init () {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      role: 'fileMenu',
      submenu: [
        {
          label: 'Open File...',
          accelerator: `${ctrlKey}+O`,
          click: () => {
            openFile(BrowserWindow.getFocusedWindow())
          }
        },
        {
          label: 'New window',
          accelerator: `${ctrlKey}+N`,
          click: () => {
            createWindow()
          }
        },
        {
          type: 'separator'
        },
        {
          role: 'quit'
        }
      ]
    },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    {
      role: 'windowMenu',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
        { type: 'separator' },
        {
          label: 'Hide menubar',
          type: 'checkbox',
          accelerator: `${ctrlKey}+M`,
          checked: true,
          click: () => {
            const autoHide = BrowserWindow.getFocusedWindow().autoHideMenuBar
            BrowserWindow.getFocusedWindow().autoHideMenuBar = !autoHide
            BrowserWindow.getFocusedWindow().menuBarVisible = autoHide
          }
        }
      ]
    }
  ]))
}

module.exports = {
  init
}