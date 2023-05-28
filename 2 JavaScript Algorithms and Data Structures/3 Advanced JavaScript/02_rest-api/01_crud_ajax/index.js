// VARIABLES DEL DOPM
const
d =document,
table = d.querySelector('.crud-table'),
form = d.querySelector('form.crud-form'),
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
  // console.log(err)
  table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`)
}

const responseSuccess = (res) => {
  // console.log(res)
  res.forEach( el => {
    template.querySelector('.name').textContent = el.nombre
    template.querySelector('.edit').dataset.name = el.nombre
    template.querySelector('.constellation').textContent = el.constelacion
    template.querySelector('.edit').dataset.constellation = el.constelacion
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
      success: (res) => { responseSuccess(res) },
      error: (err) => { responseError(err) },
      data: null
    }
  )
}

d.addEventListener('DOMContentLoaded', GET)

/* **********     Curso JavaScript: 116. APIs REST: CRUD con AJAX (2/2) - #jonmircha     ********** */
const POST = (e) => {
  ajax({
    url: "http://localhost:3000/santos",
    method: "POST",
    success: (res) => location.reload(),
    error: (err) => responseError(err),
    data: {
      nombre: e.target.nombre.value,
      constelacion: e.target.constelacion.value
    }
  })
}

const PUT = (e) => {
  ajax({
    method: "PUT",
    url: `http://localhost:3000/santos/${e.target.id.value}`,
    success: (res) => location.reload(),
    error: (err) => responseError(err),
    data: {
      nombre: e.target.nombre.value,
      constelacion: e.target.constelacion.value
    }
  })
}

const DELETE = (e) => {
  ajax({
    url: `http://localhost:3000/santos/${e.target.dataset.id}`,
    method: "DELETE",
    success: (res) => location.reload(),
    error: (err) => alert(err)
  })
}

d.addEventListener('submit', e => {
  if (e.target === form) {
    e.preventDefault();
    if (!e.target.id.value) {
      //Create - POST
      POST(e)
    } else {
      // PUT - UPDATE
      PUT(e)
    }
  }
})


d.addEventListener("click", e => {
  if (e.target.matches(".edit")) {
    title.textContent = "Editar Santo"
    form.nombre.value = e.target.dataset.name
    form.constelacion.value = e.target.dataset.constellation
    form.id.value = e.target.dataset.id
  }

  if (e.target.matches(".delete")) {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`)

    if (isDelete) {
      // DELETE - DELETE
      DELETE(e)
    }
  }
})