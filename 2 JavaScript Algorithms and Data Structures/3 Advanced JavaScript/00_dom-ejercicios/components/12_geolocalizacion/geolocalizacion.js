/* **********     Curso JavaScript: 95. DOM: Ejercicios Prácticos | Detección de la Geolocalización - #jonmircha     ********** */
const d = document,
      n = navigator
export default function getLocation(id) {
  const $div = d.getElementById(id),
        options = {
          enableHighAccuracy: true,
          timeout: 5000,
          miximumAge: 0
        },
        success = position => {
          console.log(position)
        },
        error = err => {
          $div.innerHTML = `<p><mark>Error: ${err.code} ${err.message}</mark></p>`
          console.log(err)
        }
  n.geolocation.getCurrentPosition(success, error, options)
}