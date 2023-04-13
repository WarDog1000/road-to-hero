/* **********     Curso JavaScript: 92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent - #jonmircha     ********** */
const d = document,
      n = navigator,
      ua = n.userAgent
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
  isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/ios/i),
    windows: () => ua.match(/windows/i),
    any: function() { return this.android() || this.ios() || this.windows() }
  },
  isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function() { return this.linux() || this.mac() || this.windows() }
  },
  isBrowser = {
    crome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/),
    any: function() { return this.edge() || this.ie() || this.opera() || this.crome() || this.safari() || this.firefox}
  }

  // console.log(ua)
  // console.log(isMobile.android())

  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Paltaforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `

  // Contenido exclusivo
  if(isBrowser.crome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Crome</mark></p>`
  }
  
  if(isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Felicidades por usar Windows mi pana</mark></p>`
  }
  
  if(isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Re de chetos usar Mac Os</mark></p>`
  }

  // Redirecciones
  if(isMobile.android()) {
    window.location.href = "https://www.youtube.com/watch?v=WHfyN411fd4&t=607s"
  }
}