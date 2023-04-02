import hamburgerBtn from "./components/1_hamburger_btn/hamburger_btn.js"
import {digitalClock, alarm} from "./components/2_reloj/reloj.js"

const d = document
d.addEventListener("DOMContentLoaded", e => {
  hamburgerBtn('.hamburger', '.panel', '.menu a')
  digitalClock('#reloj', '#')
} )