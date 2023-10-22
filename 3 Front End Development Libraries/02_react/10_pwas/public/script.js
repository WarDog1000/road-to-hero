// hacer una validacion para saber si el navegador soporta pwa
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(reg => console.log("Registro de Service Worker exitoso", reg))
  .catch(err => console.log("Error al tratar de registrar el Service Worker", err))
}