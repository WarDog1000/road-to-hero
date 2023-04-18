/* **********     Curso JavaScript: 99. DOM: Ejercicios Prácticos | ScrollSpy con Intersection Observer - #jonmircha     ********** */
const d = document
export default function scrollSpy() {

  const $sections = d.querySelectorAll('section[data-scroll-spy]')

  // funcion callback
  const cb = entries => entries.forEach( entry => {
    const id = entry.target.getAttribute('id'),
    $anchorMenu = d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
    (entry.isIntersecting)
    ? $anchorMenu.classList.add('active')
    : $anchorMenu.classList.remove('active')
  })

  const observer = new IntersectionObserver(cb, {
    // root,
    rootMargin: '-250px' // margenes negativos reducen el rango de observacion
  })
  $sections.forEach( el => observer.observe(el))
}