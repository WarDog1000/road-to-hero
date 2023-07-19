export function Main() {
  const $main =  document.createElement('main')
  $main.id = 'main'
  if(!location.hash.includes('#/search')) { // Cuando el hash de la page no sea una busqueda, agrega grid-fluid para las cuadriculas responsivas
    $main.classList.add('grid-fluid')
  }
  return $main
}