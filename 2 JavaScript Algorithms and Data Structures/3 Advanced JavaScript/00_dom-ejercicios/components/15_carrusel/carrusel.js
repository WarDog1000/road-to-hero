/* **********     Curso JavaScript: 98. DOM: Ejercicios Prácticos | Responsive Slider - #jonmircha     ********** */
const d = document
export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
  $prevBtn = d.querySelector(".slider-btns .prev"),
  $slide = d.querySelectorAll(".slider-slide")
  let i = 0 // index of
  let active = false
  
  // funcion que permite el carrusel
  const carrusel = () => {
    setInterval(() => {    
      if(!active){
        $slide[i].classList.remove("active")    
      i++

      if(i >= $slide.length) {      
        i = 0
      }
      $slide[i].classList.add("active")
    }
    active = false
    }, 3000);
  }
  carrusel()

  d.addEventListener('click', e => {
    // cuando el objeto que origina el evento es el btn previo
    if(e.target === $prevBtn) {
      e.preventDefault()
      // quita la clase active al elemento actual
      $slide[i].classList.remove("active")
      // retrosede la posicion de i en 1
      i--

      // cuando el valor de i es menor a 0, es poque llegaste al final del carrusel
      if(i < 0) {
        // se mueve a la ultima posicion del nodeList
        i = $slide.length - 1
      }
      // agrega la clase active al elemento actual
      $slide[i].classList.add("active")
    }


    // cuando el objeto que origina el evento es el btn next
    if(e.target === $nextBtn) {
      e.preventDefault()
      // quita la clase active al elemento actual
      $slide[i].classList.remove("active")
      // avansa la posicion de i en 1
      i++

  // cuandodo el valor de i sobrepasa el tamaño del nodeList, es poque llegaste al final del carrusel
      if(i >= $slide.length) {
        // vuelve a la posicion 0
        i = 0
      }
      // agrega la clase active al elemento actual
      $slide[i].classList.add("active")
    }

    active = true
  }
  )
}