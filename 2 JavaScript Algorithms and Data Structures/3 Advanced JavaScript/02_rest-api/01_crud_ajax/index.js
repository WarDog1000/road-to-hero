// VARIABLES DEL DOPM
const d =document,
table = d.querySelector('.crud-table'),
form = d.querySelector('.crud-form'),
title = d.querySelector('.crud-title'),
template = d.getElementById('crud-template').content,
fragment = d.createDocumentFragment()

/* **********     Curso JavaScript: 115. APIs REST: CRUD con AJAX (1/2) - #jonmircha     ********** */

// recupero un objeto options cada ves que se ejecute una peticion del objeto ajax
const ajax = (options) => {
  let {url, method, success, error, data} = options
  /*
  url: string
  method: string
  data: object
  success: function
  error: function
  */
  const xml = new XMLHttpRequest()
  
  xml.addEventListener('readystatechange', e => {
    if(xml.readyState !== 4) return
    if(xml.status >= 200 && xml.status < 300) {
      let json = JSON.parse(xml.responseText)
      success(json)
    }else {
      let message = xml.statusText || 'Ocurrio un error'
      error(`Error: ${xml.status} ${message}`)
    }


  })

  xml.open(method ||'GET', url)

  // Agrega una caberera a la peticion, especificando el tip[ode contenido]
  xml.setRequestHeader("Content-Type", "application/json; charset=utf-8")
  
  // Ejecuta el metodo send y convierte el dato(Object) de la peticion a un formato valido
  xml.send(JSON.stringify(data))
}

const responseError = (err) => {
  table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`)
}

const responseSuccess = ( res) => {
 res.forEach( el => {
  template.querySelector('.name').textContent = el.nombre
  template.querySelector('.edit').dataset.name = el.nombre
  template.querySelector('.constelation').textContent = el.constelacion
  template.querySelector('.edit').dataset.constelacion = el.constelacion
  template.querySelector('.edit').dataset.id = el.id
  template.querySelector('.delete').dataset.id = el.id
  let clonedNode = d.importNode(template, true)
  fragment.appendChild(clonedNode)
 })

 table.querySelector('tbody').appendChild(fragment)
}

const GET = () => {
  ajax(
    {
      method: 'GET',
      url: 'http://localhost:3000/santos',
      success: (res) => {
        responseSuccess(res)
        console.log(res)
      },
      error: (err) => { 
        responseError(err)
        console.log(err)
      },
      data: null
    }
  )
}
const POST = () => {
  ajax(
    {
      method: 'POST',
      url: 'http://localhost:3000/santos',
      success: (res) => {
        responseSuccess(res)
        console.log(res)
      },
      error: (err) => { 
        responseError(err)
        console.log(err)
      },
      data: {
        
      }
    }
  )
}

d.addEventListener('DOMContentLoaded', GET)
d.addEventListener('submit', e => {
  if(e.terget === form) {
    e.preventDefault()
    POST
  }
})

/* **********     Curso JavaScript: 116. APIs REST: CRUD con AJAX (2/2) - #jonmircha     ********** */