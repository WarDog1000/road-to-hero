// VARIABLES DEL DOPM
const
d =document,
table = d.querySelector('.crud-table'),
form = d.querySelector('form.crud-form'),
title = d.querySelector('.crud-title'),
template = d.getElementById('crud-template').content,
fragment = d.createDocumentFragment()

/* **********     Curso JavaScript: 119. APIs REST: CRUD con Axios (1/2) - #jonmircha     ********** */
const responseSuccess = (res) => {
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

const responseError = (el, err) => {
  let message = err.statusText || "Ocurrió un error";
  el.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`)

}

const GET = async () => {
  try {
    let req = await axios.get('http://localhost:3000/santos'),
    res = await req.data
    responseSuccess(res)
  } catch (err) {
    responseError(table, err)
  }
}

d.addEventListener('DOMContentLoaded', GET)

/* **********     Curso JavaScript: 120. APIs REST: CRUD con Axios (2/2) - #jonmircha     ********** */
const POST = async (e) => {
  try {
    let options = {
      method: "POST",
      headers: {"Content-type": "application/json; charset=utf-8"},
      data: JSON.stringify({
        nombre: e.target.nombre.value,
        constelacion: e.target.constelacion.value
      })
    },
      req = await axios("http://localhost:3000/santos", options),
      res = await req.data

    location.reload()

  } catch (err) {
    responseError(form, err)
  }
}

const PUT = async (e) => {
  try {
    let options = {
      method: "PUT",
      headers: {"Content-type": "application/json; charset=utf-8"},
      data: JSON.stringify({
        nombre: e.target.nombre.value,
        constelacion: e.target.constelacion.value
      })
    },
      req = await axios(`http://localhost:3000/santos/${e.target.id.value}`, options),
      res = await req.data;

    location.reload()

  } catch (err) {
    responseError(form, err)
  }
}

const DELETE = async (e) => {
  try {
    let options = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    },
    req = await axios(`http://localhost:3000/santos/${e.target.dataset.id}`, options),
    res = await req.data

  location.reload()

  } catch (err) {
    responseError(form, err)
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()
  if(!e.target.id.value) {
    // Si el input:hidden viene con un "id" vacio, se ejecuta un CREATE
    POST(e)
  } else {
    // Si el intup:hiden "posee" una id, se ejecuta un UPDATE
    PUT(e)
  }
})

d.addEventListener('click', e => {
  if(e.target.matches('.edit')) {
    // Trae los datos al input para poder ser editados posteriormente
    title.textContent = "Editar Santo"
    form.nombre.value = e.target.dataset.name
    form.constelacion.value = e.target.dataset.constellation
    form.id.value = e.target.dataset.id
  }

  if(e.target.matches('.delete')) {
    // Crea un fonfirmation
    const isDelete = confirm('Are you sure you want to delete')
    // Si se acepta el confirmation
    if(isDelete) {
      DELETE(e)
    }
  }
})