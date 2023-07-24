// El State
const state = {
  todolist: []
}

// Tempplate UI
const template = () => {
  if(state.todolist.length < 1) {
    return `<p>Lista sin tareas por hacer</p>`
  }
  
  let todos = state.todolist.map( item => `<li>${item}</li>`).join("")
  
  return todos
}

// Render UI
const render = () => {
  console.log(state)
  
  list = document.getElementById("todo-list")

  if(!list) return false

  list.innerHTML = template()

}

document.addEventListener('DOMContentLoaded', render)

document.addEventListener("submit", e => {
  if(!e.target.matches("#todo-form")) return false
  e.preventDefault()

  const item = document.getElementById("todo-item")
  if(!item) return false

  if(item.value === '') return false // Si el valor del input esta vacio
  
  // Actualizar el State y la UI
  state.todolist.push(item.value)

  render()

  // Limpiar el inpout
  item.value = ""
  item.focus()


})