class Content {
  constructor ({
    path
  }) {
    this.path = path
  }
}

/**
 * Read file content, convert and send it to the browser window
 * 
 * @param {*} path 
 */
 function process(browser, path) {
  try {
    const content = new Content({ path })
    browser.webContents.send('update', content)
  } catch (error) {
    console.error('ERROR UPDATING FILE', error)
  }
}

module.exports = {
  process,
  Content
}