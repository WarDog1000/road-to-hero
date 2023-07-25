import { Components } from "./Components.js"

const app = new Components({
  el: "#todo-list",
  data: {
    todoList: []
  },
  template: function(props) {
    if(props.todoList.length < 1) {
      return `<p>Lista sin tareas por hacer</p>`
    }

    let todos = props.todoList.map( item => `<li>${item}</li>`).join("")

    return todos
  }
})

document.addEventListener('DOMContentLoaded', app.render)

app.setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"]
})

document.addEventListener("submit", e => {
  if(!e.target.matches("#todo-form")) return false
  e.preventDefault()

  const item = document.getElementById("todo-item")
  if(!item) return false

  if(item.value === '') return false // Si el valor del input esta vacio
  
  // Actualizar el State de forma Reactiva
  const lastState = app.getState()
  lastState.todoList.push(item.value)
  app.setState({ todoList: lastState.todoList})

  // Limpiar el inpout
  item.value = ""
  item.focus()

})