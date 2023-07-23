export function ContactForm() {
  const form = document.createElement("div"),
  styles = document.getElementById("dynamic-styles")
  styles.innerHTML = `
  .contact-form {
    --form-ok-color: #4caf50;
    --form-error-color: #f44336;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  
  /* selector para todos los elementos hijos directos */
  .contact-form > * {
    padding: .5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
  }
  
  .contact-form textarea {
    resize: none;
  }
  
  .contact-form legend,
  .contact-form-response {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  
  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
    font-family: sans-serif;
    background-color: var(--light-color);
  }
  
  /* selecciona todos los elemetos input con la propriedad 'type="submit"' */
  .contact-form input[type="submit"] {
    width: 50%;
    font-weight: bold;
    cursor: pointer;
  }
  
  /* selecciona todo los elementos con la propriedad 'placeholder' */
  .contact-form *::placeholder,
  .contact-form input[type="submit"] {
    color: rgba(205, 205, 205, 0.85);
  }
  
  /* sellecciona todos los elementos con la propriedad 'required' cuando esta sea valida */
  .contact-form [required]:valid {
    border: thin solid var(--form-ok-color)
  }
  .contact-form [required]:invalid {
    border: thin solid var(--form-error-color)
  }
  
  
  /* ============ MENSAGES DE ERROR ============ */
  .contact-form-error {
    margin-top: -1rem;
    font-size: 80%;
    background-color: var(--form-error-color);
    color: var(--light-color);
    transition: all 800ms ease;
  }
  
  .contact-form-error.is-active {
    display: block;
    animation: show-message 1s normal 0s ease-out both;
  }
  
  @keyframes show-message {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  
  .none {
    display: none;
  }
  `
  form.innerHTML = `
  <form class="contact-form" action="https://formsubmit.co/jhonatansouzameza100@gmail.com" method="POST" target="_blank">
    <!-- _next -->
    <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html">
    <legend>Enviame tus comentarios</legend>
    <input type="text" name="name" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" title="El nombre solo hacepta letras y espacios en blanco" placeholder="Escribe tu nombre" required>
    <input type="email" name="email" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Email incorrecto" placeholder="Escribe tu email" required>
    <input type="text" name="subject" title="El asunto es requerido" placeholder="Asunto a tratar" required>
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tu comentario" title="Tu comenentario no debe superar los 255 caracteres" required data-pattern="^.{1,255}$"></textarea>
    <input type="submit" value="Enviar">
    <div class="contact-form-loader none">
      <img src="app/assets/loader.svg" alt="Cargando">
    </div>
  </form>
  <div class="contact-form-response none">
    <p>Los datos han sido enviados exitosamente</p>
  </div>
  `

const d = document
function contactFormValidations() {
  const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]')
  // console.log($input)

  // recorre el conjunto de inputs para insertar elementos '<span>'
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

  const { hash } = window.location
  if(hash=== "#/contacto") { // Se ejecutara solo estando en hash #/contactp
    // envio del formulario con el evento 'submit'
    d.addEventListener('submit', e => {
      // se corta el comportamiento por defecto del submit
      // e.preventDefault()
      // se crea una referencia del elemento loader y otra para el elemeto de respuesta
      const $loader = d.querySelector('.contact-form-loader'),
            $response = d.querySelector('.contact-form-response')
  
      // se muestra en pantalla ele elemento 'loader'
      $loader.classList.toggle('none')
      // despues de 2 segundos desaparece el loader, se imprime la respuesta en pantalla y se limpia los campos del formulario
      setTimeout(() =>{ 
        $loader.classList.toggle('none')
        $response.classList.toggle('none')
        // resetea el formulario
        $form.reset()
  
        // 3 segundos despues de mostrar el elemento 'response', lo oculta de pantalla
        setTimeout( () => $response.classList.toggle('none'), 3000)
      }, 2000 )
      
  
    })

  }

}

setTimeout(() => contactFormValidations(), 100)
  
  return form
}