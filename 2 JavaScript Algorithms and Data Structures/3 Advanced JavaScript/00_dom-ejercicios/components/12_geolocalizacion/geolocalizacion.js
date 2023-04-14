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
          let coords = position.coords
          $div.innerHTML = `<p>Tu posicion actual es:</p>
                            <ul>
                              <li>Latitud: <b>${coords.latitude}</b></li>
                              <li>Longuitud: <b>${coords.longitude}</b></li>
                              <li>Precision: <b>${coords.accuracy}</b></li>
                            </ul>
                            <a href='https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z' target='_blank' rel='noopener'>Ubicacion actual</a>
                            `
          console.log(position)
        },
        error = err => {
          $div.innerHTML = `<p><mark>Error: ${err.code} ${err.message}</mark></p>`
          console.log(err)
        }
  n.geolocation.getCurrentPosition(success, error, options)
}