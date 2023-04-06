/* **********     Curso JavaScript: 88. DOM: Ejercicios Prácticos | Tema Dark / Light - #jonmircha     ********** */
/* **********     Curso JavaScript: 89. DOM: Ejercicios Prácticos | API localStorage - #jonmircha     ********** */
const d = document
export default function darkTheme(btn, theme) {
  const $btn = d.querySelector(btn),
  $selectors = d.querySelectorAll('[data-dark]')
  let moon = 'C',
  sun = 'S'

  d.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if($btn.textContent === moon) {
        $selectors.forEach( e => e.classList.add(theme))
        $btn.textContent = sun
      } else {
        $selectors.forEach( e => e.classList.remove(theme))
        $btn.textContent = moon        
      }
    }
  })

}
