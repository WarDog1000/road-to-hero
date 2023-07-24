const item = document.getElementById("todo-item"),
      list = document.getElementById("todo-list")

document.addEventListener("submit", e => {
  if(!e.target.matches("#todo-form")) return false
  e.preventDefault()

  // Agregar item a la lista
  let li = document.createElement("li")

  if(item.value === '') return false // Si el valor del input esta vacio

  li.textContent = item.value

  // Limpiar el inpout
  item.value = ""
  item.focus()

  list.appendChild(li)

})