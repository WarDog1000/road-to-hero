const d = document,
selectPrimary = d.getElementById("select-primary"),
selectSecondary = d.getElementById("select-secondary")

function loadStates() {
  fetch("https://api")
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {
    // console.log(json)
    let options = `<option value="">Elije un Estado</option>`
    json.response.estado.forEach( el => options += `<option value="${el}">${el}</option>`)
    selectPrimary.innerHTML = options
  })
  .catch(err => {
    console.log(err)
    let message = err.statusText || "Ocurrio un error!"
    selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`
  })
}
function loadTowns(state) {
  fetch(`https://api${state}`)
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {
    // console.log(json)
    let options = `<option value="">Elije un Municipio</option>`
    json.response.municipios.forEach( el => options += `<option value="${el}">${el}</option>`)
    selectSecondary.innerHTML = options
  })
  .catch( err => {
    console.log(err)
    let message = err.statusText || "Ocurrio un error!"
    selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`
  })
}

d.addEventListener('DOMContentLoaded', e => loadStates)
selectPrimary.addEventListener('change', e => loadTowns(e.target.value))