 /* **********     Curso JavaScript: 88. DOM: Ejercicios Prácticos | Tema Dark / Light - #jonmircha     ********** */
/* **********     Curso JavaScript: 89. DOM: Ejercicios Prácticos | API localStorage - #jonmircha     ********** */
const d = document, ls = localStorage
export default function darkTheme(btn, theme) {
  const $btn = d.querySelector(btn),
  $selectors = d.querySelectorAll('[data-dark]')
  let moon = 'C',
  sun = 'S'

  const lightMode = () => {
    $selectors.forEach( e => e.classList.remove(theme))
    $btn.textContent = moon
    ls.setItem('selectedTheme', 'light')
  }
  const darkMode = () => {
    $selectors.forEach( e => e.classList.add(theme))
    $btn.textContent = sun
    ls.setItem('selectedTheme', 'dark')
  }

  d.addEventListener('click', (e) => {
    if(e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if($btn.textContent === moon) {
        darkMode()
      } else {
        lightMode()
      }
    }
  })

  d.addEventListener('DOMContentLoaded', e => {
    if(ls.getItem('selectedTheme') === null) ls.setItem('selectedTheme', 'light')
    if(ls.getItem('selectedTheme') === 'light') lightMode()
    if(ls.getItem('selectedTheme') === 'dark') darkMode()
  })
}
