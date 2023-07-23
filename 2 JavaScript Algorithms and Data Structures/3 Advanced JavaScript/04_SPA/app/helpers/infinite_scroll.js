import api from "./wp_api.js";
import { SearchCard } from "../components/SearchCard.js"
import { PostCard } from "../components/PostCard.js";
import { ajax } from "./ajax.js";

export async function infiniteScroll() {
  let query = localStorage.getItem('wpSearch'),
  apiURL,
  Component // HOC (High Order Component)

  window.addEventListener('scroll', async e => {
    // obtenemos informacion de altura y paginacion
    let {scrollTop, clientHeight, scrollHeight} = document.documentElement,
    { hash } = window.location

    // console.log(scrollTop, clientHeight, scrollHeight, hash)

    // Cuando se llega al final del scroll
    if(scrollTop + clientHeight >= scrollHeight) {
      api.page++

      // si estamos en la page de #HOME
      if(!hash || hash === "#/") {
        apiURL = `${api.POSTS}&page=${api.page}`
        Component = PostCard // se guarda como componente el contenido de PostCard
      } else if (hash.includes("#/search")) { // si estamos en la page de #SEARCH
        apiURL = `${api.SEARCH}${query}&page=${api.page}`
        Component = SearchCard // se gaurda como component el contenido de SearchCard
      } else { // cualquier otra page
        return false
      }

      // aparece el loader
      document.querySelector(".loader").style.display = "block"

      // dependiendo de donde estamos ejecuta ajax con su url y el componente
      await ajax({
        url: apiURL,
        cbSuccess: (posts) => {
          // console.log(posts)
          let html = ""
          posts.forEach( el => html += Component(el))
          document.getElementById("main").insertAdjacentHTML("beforeend", html)
          document.querySelector(".loader").style.display = "none"
        }
      })
    }
  })
}