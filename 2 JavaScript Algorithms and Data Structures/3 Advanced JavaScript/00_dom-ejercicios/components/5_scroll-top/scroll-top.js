/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */
const d = document, w = window
export default function scrollTop(btn) {
  const $scroll = d.querySelector(btn)
  w.addEventListener('scroll', e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop
    // console.log(w.pageYOffset)
    // console.log(d.documentElement.scrollTop)

    if(scrollTop > 600) {
      $scroll.classList.remove('hidden')
    } else {
      $scroll.classList.add('hidden')
    }
  })
  d.addEventListener('click', e => {
    if(e.target.matches(btn)) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0
        // left: 0
    })
    }
  })
}