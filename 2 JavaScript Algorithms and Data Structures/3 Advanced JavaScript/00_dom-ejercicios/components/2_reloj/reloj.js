/* **********     Curso JavaScript: 82. DOM: Ejercicios Prácticos | Reloj Digital - #jonmircha     ********** */

const d = document
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTemp
  d.addEventListener('click', e => {
    if(e.target.matches(btnPlay)) {
      clockTemp = setInterval( () => {
        let clockHour = new Date().toLocaleTimeString()
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
      }, 1000)
      e.target.disabled = true
      // d.querySelector(btnPlay).disabled = true
    }
    
    if(e.target.matches(btnStop)) {
      clearInterval(clockTemp)
      d.querySelector(clock).innerHTML = null
      d.querySelector(btnPlay).disabled = false
    }
  })
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmTemp
  const $alarm = d.createElement('audio')
  $alarm.src = sound
  d.addEventListener('click', e => {
    if(e.target.matches(btnPlay)) {
      alarmTemp = setTimeout(() => {
        $alarm.play()
      }, 2000)
      e.target.disabled = true
    }

    if(e.target.matches(btnStop)) {
      clearTimeout(alarmTemp)
      $alarm.pause()
      $alarm.currentTime = 0
      d.querySelector(btnPlay).disabled = false
    }
  })

}