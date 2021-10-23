const LS_KEY_SKIN = 'mcskinviewer_skin'

const skinPathInput = document.getElementById('skin_path_input')
const skinContainer = document.getElementById('skin_container')

let defaultSkin = localStorage.getItem(LS_KEY_SKIN)
if (defaultSkin == null) { defaultSkin = 'img/steve.png' }

const skinViewer = new skinview3d.SkinViewer({
  canvas: skinContainer,
  width: window.innerWidth,
  height: window.innerHeight,
  skin: defaultSkin,
  panorama: 'img/panorama.png'
})

const control = skinview3d.createOrbitControls(skinViewer)
control.enableRotate = true
control.enableZoom = true
control.enablePan = true

let walk = skinViewer.animations.add(skinview3d.WalkingAnimation);

window.onresize = (ev) => {
  const { innerWidth, innerHeight } = ev.target
  skinViewer.width = innerWidth
  skinViewer.height = innerHeight
}

skinPathInput.onchange = (ev) => (loadSkin(ev.target.value))

loadSkin = (skin = '') => {
  if (typeof skin !== 'string') { return }
  
  let value = skin
  if (value) {
    localStorage.setItem(LS_KEY_SKIN, value)
  } else {
    value = localStorage.getItem(LS_KEY_SKIN)
  }

  skinViewer.loadSkin(value)
}