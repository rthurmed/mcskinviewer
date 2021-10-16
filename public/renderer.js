const skinPathInput = document.getElementById('skin_path_input')
const skinContainer = document.getElementById('skin_container')

const skinViewer = new skinview3d.SkinViewer({
  canvas: skinContainer,
  width: window.innerWidth,
  height: window.innerHeight,
  skin: 'img/steve.png',
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

skinPathInput.onchange = (ev) => (skinViewer.loadSkin(ev.target.value))

setInterval(() => {
  skinViewer.loadSkin(skinPathInput.value)
}, 500)