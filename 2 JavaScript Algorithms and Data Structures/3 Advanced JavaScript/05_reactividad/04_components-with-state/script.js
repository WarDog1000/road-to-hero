// El State Global
const state = {
  todoList: [],
  nombre: ""
}

// Template UI
const template = () => {
  if(template.data.todoList.length < 1) {
    return `<p>Lista sin tareas por hacer</p>`
  }
  
  let todos = template.data.todoList.map( item => `<li>${item}</li>`).join("")
  
  return todos
}

//  Agregar State al template que genera el componente de UI (State Local)
template.data = {
  todoList: []
}

// Render UI
const render = () => {
  console.log("Estado Local", template.data)
  console.log("Estado Global", state)
  
  const list = document.getElementById("todo-list")

  if(!list) return

  list.innerHTML = template()

}

// Actualizar el state de forma reactiva
const setState = obj => {
  for(let key in obj) {
    if(template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key]
    }
  }

  render()
}

// Obtener una copia inmutable del Satete
const getState = () => {
  const newState = JSON.parse(JSON.stringify(template.data))
  return newState
}

document.addEventListener('DOMContentLoaded', render)

// Estableciendo valores por defecto al State
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
})

document.addEventListener("submit", e => {
  if(!e.target.matches("#todo-form")) return false
  e.preventDefault()

  const item = document.getElementById("todo-item")
  if(!item) return false

  if(item.value === '') return false // Si el valor del input esta vacio
  
  // Actualizar el State de forma Reactiva
  const lastState = getState()
  lastState.todoList.push(item.value)
  setState({ todoList: lastState.todoList})

  // Limpiar el inpout
  item.value = ""
  item.focus()


})