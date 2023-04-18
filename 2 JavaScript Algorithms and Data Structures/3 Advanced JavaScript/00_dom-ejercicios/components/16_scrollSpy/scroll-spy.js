/* **********     Curso JavaScript: 99. DOM: Ejercicios Prácticos | ScrollSpy con Intersection Observer - #jonmircha     ********** */
const d = document
export default function scrollSpy() {
  const $sections = d.querySelectorAll('section[data-scroll-spy]')
  const cb = entries => entries.forEach( entry => entry)
  const observer = new IntersectionObserver(cd, {})
  $sections.forEach( le => observer(el))
}