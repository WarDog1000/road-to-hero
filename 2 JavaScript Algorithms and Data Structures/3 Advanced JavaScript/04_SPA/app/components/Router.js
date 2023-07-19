import { ajax } from '../helpers/ajax.js'
import api from '../helpers/wp_api.js'
import { Post } from './Post.js'
import { PostCard } from './PostCard.js'
import { SearchCard } from './SearchCard.js'

export async function Router() {
  const main = document.getElementById('main')
  main.innerHTML = null
  let {hash} = location
  // console.log(hash)
  
  if(!hash || hash === "#/") {
    // main.innerHTML = `<h2>Seccion del Home</h2> `
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts)
        let html = ""
        posts.forEach((post) => { html += PostCard(post)})
        main.innerHTML = html
      }
    })
    // console.log(api.POST)

  } else if(hash.includes("#/search")) {
    // main.innerHTML =`<h2>Seccion del Buscador</h2>`
    let query = localStorage.getItem('wpSearch')
    if(!query) {
      // si no hay nada en localstorage 'wpSearch' se sale de la ejecucion
      document.querySelector('.loader').style.display = 'none'
      main.innerHTML =`<h2>Seccion del Buscador</h2>`
      return false
    }
    await ajax ({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search)
        let html = ""

        // Si la busqueda no obtiene resultados vendra vacia
        if(search.length === 0) {
          // entonces
          html = `<p class="error">No existen resultados de busqueda para <mark>${query}</mark></p>`

        } else { // caso contrario
          search.forEach( el => {
            html += SearchCard(el)
          })
        }

        main.innerHTML = html
      }
    })
  } else if(hash=== "#/contacto") {
    main.innerHTML =`<h2>Seccion de Contacto</h2>`
  } else {
    // main.innerHTML =`<h2>Aqui cargara el contenido del Post previamente seleccionado</h2>`
    await ajax({
      url: `${api.POST}/${localStorage.getItem('wpPostId')}`,
      cbSuccess: (post) => {
        // console.log(post)
        main.innerHTML = Post(post)
      }
    })
  }

  document.querySelector(".loader").style.display= "none"

}