const path = require('path')
const { BrowserWindow } = require('electron')
const { openFile } = require('./file')
const { app } = require('./config')

/**
 * @returns BrowserWindow
 */
function createWindow () {
  const browser = new BrowserWindow({
    height: 600,
    width: 800,
    title: app.name,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js')
    },
    autoHideMenuBar: true
  })
  browser.loadFile('public/index.html')
  openFile(browser)
  return browser
}

module.exports = {
  createWindow
}