/* **********     Curso JavaScript: 94. DOM: Ejercicios Prácticos | Detección de la WebCam - #jonmircha     ********** */
const d = document,
      n = navigator
export default function userWebcam(idWebcam) {
  const $video = d.getElementById(idWebcam)
  // console.log(n.mediaDevices.getUserMedia)
  if(n.mediaDevices.getUserMedia) {
    n.mediaDevices
    .getUserMedia({video: true, audio: false})
    .then(stream => {
      console.log(stream)
      $video.srcObject = stream
      $video.play()
    })
    .catch(err => {
      $video.insertAdjacentHTML('beforebegin',`<p><mark>${err}</mark></p>`)
      console.log(`Ocurrio el siguiente error: ${err}`)
    })
  }
}