/* **********     Curso JavaScript: 86. DOM: Ejercicios Prácticos | Cuenta Regresiva(countdown) - #jonmircha     ********** */
const d = document
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = document.getElementById(id),
  countdownDate = new Date(limitDate).getTime()

  let countdownTemp = setInterval(() => {
    let now = new Date().getTime(),
    limitTime = countdownDate - now,
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
    hours = ('0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
    minutes = ('0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
    seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2)

    $countdown.innerHTML = `<h3>Faltan: ${days} Dias, ${hours} Horas, ${minutes} Minutos, ${seconds} Sengundos para terminar la carrera</h3>`
  }, 1000)
  
  // Caundo llegamos a la fecha
  if(limitDate < 0) {
    clearInterval(countdownTemp)
    $countdown.innerHTML = `<h3>${finalMessage}</h3>`
  }
}