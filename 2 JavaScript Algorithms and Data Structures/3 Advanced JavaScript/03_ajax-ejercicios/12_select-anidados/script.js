const d = document,
selectPrimary = d.getElementById("select-primary"),
selectSecondary = d.getElementById("select-secondary"),
selectCities = d.getElementById("select-city")

let auth = ""

function autentication() {
  fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
    "Accept": "application/json",
    "api-token": "LE_k6HSfIy3fcOJX4exPX3YVxrlrIUadBESAazB-jdKtbHC8njCqtss2ucLgOh-7Omk",
    "user-email": "jhonatansouzameza100@gmail.com"
  })
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {
    auth = json.auth_token
  })
  .catch( err => console.log(err))
}


function loadCountries() {
  fetch("https://www.universal-tutorial.com/api/countries", {
    "Authorization": `Bearer ${auth}`,
    "Accept": "application/json"
  })
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {
    // console.log(json)
    let options = `<option value="">Elije un Pais</option>`
    json.forEach( item => {
     options += `<option value="${item.country_name}">${item.country_name}</option>`;
    })
    selectPrimary.innerHTML = options
  })
  .catch(err => {
    console.log(err)
    let message = err.statusText || "Ocurrio un error!"
    selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`
  })
}
function loadStates(country) {
  fetch(`https://www.universal-tutorial.com/api/countries/states/${country}`, {
    "Authorization": `Bearer ${auth}`,
    "Accept": "application/json"
  })
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {
    // console.log(json)
    let options = `<option value="">Elije un Estado</option>`
    json.forEach( item => {
     options += `<option value="${item.state_name}">${item.state_name}</option>`;
    })
    selectSecondary.innerHTML = options
  })
  .catch( err => {
    console.log(err)
    let message = err.statusText || "Ocurrio un error!"
    selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`
  })
}

function loadCities(state) {
  fetch(`https://www.universal-tutorial.com/api/cities/${state}`, {
    "Authorization": `Bearer ${auth}`,
    "Accept": "application/json"
  })
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {
    // console.log(json)
    let options = `<option value="">Elije una Ciudad</option>`
    json.forEach( item => {
     options += `<option value="${item.city_name}">${item.city_name}</option>`;
    })
    selectCities.innerHTML = options
  })
  .catch( err => {
    console.log(err)
    let message = err.statusText || "Ocurrio un error!"
    selectCities.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`
  })

}

d.addEventListener('DOMContentLoaded', e => loadCountries)
selectPrimary.addEventListener('change', e => loadStates(e.target.value))
selectSecondary.addEventListener('change', e => loadCities(e.target.value))