/* **********     Curso JavaScript: 100. DOM: Video Inteligente (IntersectionObserver & VisibilityChange) - #jonmircha     ********** */
// Pagina para descargar videos de forma gartuita https://coverr.co/
const d = document,
w =window

export default function smartVideo() {
  // selecciona todo elemento video con el data atribute data-smart-video
  const $videos = d.querySelectorAll('video[data-smart-video]')

  // la funcion de callbak captura cada una de las entradas al campo de vision del Intersectionobserver
  const cb = (entries) => {
    // recorre las entries y ejecuta el siguiente codigo por cada entry
    entries.forEach((entry) => {
      // si el entry fue interseptado
      if(entry.isIntersecting) {
        // targetea el entry y ejecuta su metodo play
        entry.target.play()
      } else {
        // sino targetea el entry y ejecuta su medoto pause
        entry.target.pause()
      }


      // evento de window para cunado se cambia de ventana
      w.addEventListener('visibilitychange', e => 
         d.visibilityState === 'visible'
          ? entry.target.play()
          : entry.target.pause()
      )
    })
  }

  // se crea un nuevo observador con el IntersectionObserver, el cual ejecuta la funcion callback y tiene un limite de vision del 50%
  const observer = new IntersectionObserver(cb, {threshold: 0.5})

  // se indica a que elementos observar
  $videos.forEach( video => observer.observe(video))

}