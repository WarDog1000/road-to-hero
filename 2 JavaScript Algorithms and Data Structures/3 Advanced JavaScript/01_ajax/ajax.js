/* **********     Curso JavaScript: 106. AJAX: Objeto XMLHttpRequest - #jonmircha     ********** */
(() => {
  // 1er paso: Instanciar un objeto XMLHttpRequest
  const xml = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        fragment = document.createDocumentFragment()
   // 2do paso: Asignar el o los eventos
  // se lanza cunado detecta cualquier cambio de estado
  xml.addEventListener('readystatechange', e => {
    console.log(xml)
  })
  // 3er paso: Abrir la peticion, establecer el metodo http y el recurso url
  xml.open('GET', 'https://jsonplaceholder.typicode.com/users')
  // 4to paso: Enviar la peticion con o sin datos, dependiendo de la nesesidad
  xml.send()
})()

/* **********     Curso JavaScript: 107. AJAX: API Fetch - #jonmircha     ********** */


/* **********     Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha     ********** */


/* **********     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha     ********** */


/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha     ********** */