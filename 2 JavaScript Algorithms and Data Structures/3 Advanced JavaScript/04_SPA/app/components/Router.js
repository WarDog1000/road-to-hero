import { ajax } from '../helpers/ajax.js'
import api from '../helpers/wp_api.js'
import { Post } from './Post.js'
import { PostCard } from './PostCard.js'

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
        document.getElementById("main").innerHTML = html
      }
    })
  } else if(hash.includes("#/search")) {
    // main.innerHTML =`<h2>Seccion del Buscador</h2>`
    let query = localStorage.getItem('wpSearch')
    if(!query) 
    await ajax({
      url: ``
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