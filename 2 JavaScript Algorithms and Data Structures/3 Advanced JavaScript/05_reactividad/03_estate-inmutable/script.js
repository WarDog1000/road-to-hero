// El State
const state = {
  todoList: [],
  nombre: ""
}

// Template UI
const template = () => {
  if(state.todoList.length < 1) {
    return `<p>Lista sin tareas por hacer</p>`
  }
  
  let todos = state.todoList.map( item => `<li>${item}</li>`).join("")
  
  return todos
}

// Render UI
const render = () => {
  console.log(state)
  
  const list = document.getElementById("todo-list")

  if(!list) return

  list.innerHTML = template()

}

// Actualizar el state de forma reactiva
const setState = obj => {
  for(let key in obj) {
    if(state.hasOwnProperty(key)) {
      state[key] = obj[key]
    }
  }

  render()
}

// Obtener una copia inmutable del Satete
const getState = () => {
  // .stringify convierte el state en una cadena de texto
  // .parte convierte una cedena de texto en un obj jscript
  const newState = JSON.parse(JSON.stringify(state))
  return newState
}

document.addEventListener('DOMContentLoaded', render)

// Estableciendo valores por defecto al State
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
  nombre: "Jhon"
})

// Estado mutable, porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento
// const items = state.todoList
const items = getState()
// items.push("Tarea 4")
items.todoList.push("Tarea 4")
console.log("Estado in-Mutable", state)

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