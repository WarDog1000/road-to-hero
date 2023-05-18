/* **********     Curso JavaScript: 106. AJAX: Objeto XMLHttpRequest - #jonmircha     ********** */
(() => {
  // 1er paso: Instanciar un objeto XMLHttpRequest
  const xml = new XMLHttpRequest(),
  element = document.getElementById('xml'),
  fragment = document.createDocumentFragment()
  // 2do paso: Asignar el o los eventos
  // se lanza cuando detecta cualquier cambio de estado
  xml.addEventListener('readystatechange', e => {
    if (xml.readyState !== 4) return
    if (xml.status >= 200 && xml.status < 300) {
      console.log('éxito')
      // console.log(xml.responseText)
      let json = JSON.parse(xml.responseText)
      // console.log(json)
      json.forEach(el => {
        const li = document.createElement('li')
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        fragment.appendChild(li)
      })
      element.appendChild(fragment)
    } else {
      console.log('error')
      let message = xml.statusText || "Ocurrió un error"
      element.innerHTML = `Error ${xml.status}: ${message}`
    }
    console.log('Este mensaje cargará de cualquier forma')
  })
  
  // 3er paso: Abrir la peticion, establecer el metodo http y el recurso url
  // xml.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xml.open('GET', 'assets/users.json')
  xml.send()
})();

/* **********     Curso JavaScript: 107. AJAX: API Fetch - #jonmircha     ********** */
(() => {
  // 1er paso: No es necesario instanciar un objeto de AJAX
  const element = document.getElementById('fetch'),
  fragment = document.createDocumentFragment()
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => {
    json.forEach(el => {
      const li = document.createElement('li')
      li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
      fragment.appendChild(li)
    })
    element.appendChild(fragment)
  })
  .catch(err => {
    console.log(`${err}`)
    let message = err.statusText || "Ocurrió un error";
    element.innerHTML = `Error ${err.status}: ${message}`
  })
  .finally(() => {
    console.log('Esta línea se ejecutará independiente del resultado de la Promesa Fetch')
  })
})();
/* **********     Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha     ********** */
(() => {
  const element = document.getElementById('async'),
  fragment = document.createDocumentFragment()
  async function getData() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users'),
			json = await res.json()
			if(!res.ok) throw {status: res.status, statusText: res.statusText}
			json.forEach(el => {
				const li = document.createElement('li')
				li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
				fragment.appendChild(li)
			})
			element.appendChild(fragment)
    } catch (err) {
      console.log(`${err}`)
			let message = err.statusText || "Ocurrió un error"
			element.innerHTML = `Error ${err.status}: ${message}`
    } finally {
      console.log('esta linea se ejecutara independiente del try/catch')
    }
  }
  getData()
})();

/* **********     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha     ********** */
(() => {
	const
	element = document.getElementById('axios'),
  fragment = document.createDocumentFragment()
	axios.get('https://jsonplaceholder.typicode.com/users')
	.then(res => {
    let json = res.data
    json.forEach(el => {
      const li = document.createElement('li')
      li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
      fragment.appendChild(li)
    })
    element.appendChild(fragment)
  })
	.catch(err => {
    console.log(`${err.response}`)
    let message = err.response.statusText || "Ocurrió un error";
    element.innerHTML = `Error ${err.response.status}: ${message}`
	})
	.finally(() => console.log('Esta linea se ejecutara independiente del Axios'))
})();

/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha     ********** */
(() => {
  const
  element = document.getElementById('async-axios'),
  fragment = document.createDocumentFragment()
  async function getData() {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users')
      json = await res.data
      console.log(json)
      json.forEach(el => {
        const li = document.createElement('li')
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        fragment.appendChild(li)
      })
      element.appendChild(fragment)
    } catch(err) {
      console.log(`${err.response}`)
			let message = err.response.statusText || "Ocurrió un error"
			element.innerHTML = `Error ${err.response.status}: ${message}`
    } finally {
      console.log('esta linea se ejecutara independiente del try/catch')
    }
  }
  getData()
}
)();