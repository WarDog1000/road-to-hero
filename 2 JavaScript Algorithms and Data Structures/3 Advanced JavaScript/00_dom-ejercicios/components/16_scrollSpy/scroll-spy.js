/* **********     Curso JavaScript: 99. DOM: Ejercicios Prácticos | ScrollSpy con Intersection Observer - #jonmircha     ********** */
const d = document
export default function scrollSpy() {
  // los entries son los elementos que entran o interactuan con el campo de visualizacion
  const callbak = (entries) => {
    // console.log('entradas ', entries)

    // por cada entrada ejecutara la siguiente funcion
    entries.forEach( entrada => {
      // console.log('entrada ',entrada)

      const id = entrada.target.getAttribute('id'),
      $anchorMenu = d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
      if(entrada.isIntersecting) {
        $anchorMenu.classList.add('active')
      } else {
       $anchorMenu.classList.remove('active')
      }
    })
    
  },
  $sections = d.querySelectorAll('section[data-scroll-spy]') // selecciona todos los elementos con el atributo data-scroll-spy

  // se crea un observador, el cual recibe una funcion callbak pla cual podra manejar las observaciones
  const observador = new IntersectionObserver(callbak, { // margenes de observacion
    // root
    // rootMargin: '-250px',
    threshold: [0.5, 0.75], // min max 50% / 75% de visibilidad
  })
  // console.log('Observador', observador)

  // recorre el conjunto de $sections y asigna el observador a cada elemento dentro del conjunto
  $sections.forEach( el => observador.observe(el) )
}