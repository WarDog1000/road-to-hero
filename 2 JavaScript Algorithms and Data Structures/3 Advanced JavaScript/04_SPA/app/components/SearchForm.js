export function SearchForm() {
  const $form = document.createElement('form'),
        $input = document.createElement('input')

  $form.classList.add('search-form')
  $input.name = 'search'
  $input.type = 'search'
  $input.placeholder = 'Buscar...'
  $input.autocomplete = "off"

  $form.appendChild($input)


  // Validaciones del form
  if(location.hash.includes('#/search')) {
    // Si el usuario ah hecho una busqueda anteriormente, se agrega la busqueda como texto del input
    $input.value = localStorage.getItem('wpSearch')
  }

  document.addEventListener('search', e => {
    if(!e.target.matches("input[type='search']")) return false

    // Cuando el input ya no tenga value, (por haber hecho click en "x"), elimina la variable 'wpSearch' del localStorage
    if(!e.target.value) localStorage.removeItem('wpSearch')
  })

  document.addEventListener('submit', e => {
    if(!e.target.matches(".search-form")) return false

    e.preventDefault()

    localStorage.setItem('wpSearch', e.target.search.value)
    location.hash = `#/search?=${e.target.value}` // direccion en el navegador
  })


  return $form
}