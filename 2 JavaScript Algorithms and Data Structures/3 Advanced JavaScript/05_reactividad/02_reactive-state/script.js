// El State
const state = {
  todoList: [],
  nombre: ""
}

// Tempplate UI
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

document.addEventListener('DOMContentLoaded', render)

// Estableciendo valores por defecto al State
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
  nombre: "Jhon"
})

// Estado mutable, porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento
const items = state.todoList
items.push("Tarea 4")
console.log("Estado Mutable", state)

document.addEventListener("submit", e => {
  if(!e.target.matches("#todo-form")) return false
  e.preventDefault()

  const item = document.getElementById("todo-item")
  if(!item) return false

  if(item.value === '') return false // Si el valor del input esta vacio
  
  // Actualizar el State y la UI
  state.todoList.push(item.value)

  render()

  // Limpiar el inpout
  item.value = ""
  item.focus()


})