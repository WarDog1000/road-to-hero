/* **********     Curso JavaScript: 101. DOM: Ejercicios Prácticos | Validación de Formularios con HTML5 - #jonmircha     ********** */
/* **********     Curso JavaScript: 102. DOM: Ejercicios Prácticos | Validación de Formularios - #jonmircha     ********** */
/* **********     Curso JavaScript: 103. DOM: Ejercicios Prácticos | Envío de Formularios - #jonmircha     ********** */
const d = document
export default function contactFormValidations() {
  const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]')
  // console.log($input)

  // recorre el conjunto de inputs
  $inputs.forEach( el => {
    // crea un elemento span por cada vuelta
    const $span = d.createElement('span')
    // asigna una al elemento span una id igual al atributo 'name' del input
    $span.id = el.name
    // asigna una al elemento span un contenido igual al atributo 'title' del input
    $span.textContent = el.title
    // asigna al elemento span una clase '.contact-form-error' y la clase '.none' que en su css le da un 'display: none'
    $span.classList.add('contact-form-error', 'none')
    // inserta el span despues del elemento
    el.insertAdjacentElement('afterend', $span)
  })

  // validaciones con el evento de 'keyup'
  d.addEventListener('keyup', e => {
    // el evento se ejecutara cuando coinsida con el siguiente selector: input[required]
    if(e.target.matches('.contact-form [required]')) {
      // se guarda el elemento que origino el evento
      let $input = e.target,
          // guarda el patron de validacion de los input, o su propriedad data-atribute
          pattern = $input.pattern || $input.dataset.pattern  

      // console.log($input, pattern)

      // cuando el input tenga un atributo pattern o el valor de inpunt sea diferente de nada
      if(pattern && $input.value !== '') {
        // se guarda el patron
        let regex = new RegExp(pattern)
        // si el regex no valida el valor del input
        return !regex.exec($input.value)
          ? d.getElementById($input.name) // captura el id del '$span'
            .classList.add('is-active')  // asigna la clase '.is-active' para mostrar en pantalla el mensaje de error
          : d.getElementById($input.name) // caso valide el regex
            .classList.remove('is-active') // remueve la clase '.is-active' para que se oculte el emsage deerror de la pantalla
      }
      // cuando el input NO tenga un atributo pattern  
      if(!pattern) {
        // si el el imput viene vacio
        return $input.value === ''
          ? d.getElementById($input.name) // captura el id del '$span'
            .classList.add('is-active')  // asigna la clase '.is-active' para mostrar en pantalla el mensaje de error
          : d.getElementById($input.name) // caso valide el regex
            .classList.remove('is-active') // remueve 
      }
    }
  })
}