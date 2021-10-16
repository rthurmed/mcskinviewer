const fs = require('fs')
const path = require('path')
const { dialog, BrowserWindow } = require('electron')
const Content = require('./content')
const { app } = require('./config')

const filter = {
  Image: {
    extensions: ['png'],
    name: 'Image',
  }
}

/**
 * Open file into a browser window
 * 
 * @param {BrowserWindow} browser 
 */
function openFile (browser) {
  dialog.showOpenDialog(browser, {
    properties: ['openFile'],
    filters: [filter.Image]
  }).then((result) => {
    if (result.canceled) { return }

    const filepath = result.filePaths[0]
    
    whenFileChange(filepath, () => {
      Content.process(browser, filepath)
    })

    browser.title = `${app.name} - ${path.basename(filepath)}`
  }).catch(err => {
    console.log('ERROR OPENING FILE', err)
  })
}

/**
 * Execute callback when the file changes
 * 
 * @param {String} path 
 * @param {Function} callback 
 * @param {*} options
 */
function whenFileChange(path, callback, { immediate = true } = {}) {
  fs.watchFile(path, {}, callback)
  if (immediate) {
    callback()
  }
}

module.exports = {
  openFile,
  whenFileChange
}