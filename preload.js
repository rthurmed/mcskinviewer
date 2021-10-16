// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.addListener('update', (event, content) => {
    const skinPathInput = document.getElementById('skin_path_input')
    skinPathInput.value = content.path
    skinPathInput.dispatchEvent(new Event('change'))
  })
})
