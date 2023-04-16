/* **********     Curso JavaScript: 96. DOM: Ejercicios Prácticos | Filtros de Búsqueda - #jonmircha     ********** */
const d = document
export default function serachFilters(input, selector) {
  d.addEventListener('keyup', e => {
    if(e.target.matches(input)) {
      // console.log(e.key) // imprime la tecla pulsada
      // console.log(e.target.value) // imprime el conjunto de teclas pulsadas

      if(e.key === 'Escape') e.target.value = '' // restaura cundo se presiona esc

      d.querySelectorAll(selector)
        .forEach( 
          el => 
            el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove('filter')
            : el.classList.add('filter')
          )
    }
  })
}