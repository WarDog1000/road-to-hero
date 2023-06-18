const d = document,
main = d.querySelector("main"),
links = d.querySelector(".links"),
log = arg => console.log(arg)

let pokeAPI = "https://pokeapi.co/api/v2/pokemon"

async function loadPokemonms(url) {
  try {
    // add loader
    main.innerHTML = `<img alt="Loading..." src="loader.svg" class="loader">`

    let res = await fetch(url)
    let json = await res.json()
    let template = ""
    let prevlink = ""
    let nextLink = ""

    // capturar el error
    if(!res.ok) throw { status: res.status, statusText: res.statusText}

    for(let i=0; i < json.results.length; i++) {
      // log(json.results[i])

      try {
        // por cada elemento hace una peticion fetch al atributo "url"
        let res = await fetch(json.results[i].url)
        pokemon = await res.json()
        log(pokemon)

        if(!res.ok) throw {status: res.status, statusText: res.statusText}

        template += `
        <figure>
          <img alt="${pokemon.name}" src="${pokemon.sprites.front_default}">
          <figcaption>${pokemon.name}</figcaption>
        </figure>`
        
      } catch (error) {
        let message = error.statusText || "Ocurrio un error"
        template += `
        <figure>
        <figcaption>Error ${error.status}: ${message}</figcaption>
        </figure>`
      }
    }

    // agrego los pokemon a la pagina
    main.innerHTML = template

    // flechas de navegacion previous y next
    prevlink = json.previous ? `<a href="${json.previous}"><<</a>` : ""
    nextLink = json.next ? `<a href="${json.next}">>></a>` : ""

    links.innerHTML = prevlink + " " + nextLink
    
  } catch (error) {
    let message = error.statusText || "Ocurrio un error"
    main.innerHTML = `<p>Error ${error.status}: ${message}</p>`
  }
}

d.addEventListener("DOMContentLoaded", e => loadPokemonms(pokeAPI))

d.addEventListener('click', e => {
  e.preventDefault()
  if(e.target.matches(".links a")) {
    loadPokemonms(e.target.getAttribute("href"));
  }
})