import hamburgerBtn from "./components/1_hamburger_btn/hamburger_btn.js"
import {digitalClock, alarm} from "./components/2_reloj/reloj.js"
import {shortcuts, moveBall} from "./components/3_teclado/teclado.js"
import countdown from "./components/4_countdown/countdown.js"

const d = document
d.addEventListener("DOMContentLoaded", e => {
  hamburgerBtn('.hamburger', '.panel', '.menu a')
  digitalClock('#reloj', '#activar-reloj', '#detener-reloj')
  alarm('assets/alarma.mp3', '#activar-alarma', '#detener-alarma')
  countdown('countdown', 'Feb 25, 2024', 'Feliz Cumpleaños')
} )


d.addEventListener('keydown', e => {
  // keydown
  // keyup
  // keypress
  shortcuts(e)

  moveBall(e, '.ball', '.stage')
})