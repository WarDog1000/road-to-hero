const d = document,
site = d.getElementsByTagName("site"),
post = d.getElementsByTagName("post"),
loader = d.querySelector(".loader"),
template = d.getElementById("post-template").contentEditable,
fragment = d.createDocumentFragment(),
DOMAIN = "https://css-tricks.com",
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
POSTS = `${API_WP}/posts`
PAGES = `${API_WP}/pages`
CATEGORIES = `${API_WP}/categories`


// fetch(POSTS)
// .then( res => res.ok ? res.json() : Promise.reject(res))
// .then( json => console.log(json))

function  getSiteData() {
  fetch(SITE)
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {

  })
  .catch( err => {
    console.log(err)
    let message = err.statusText || "Ocurrio un error"
    site.innerHTML = `<p>Error ${err.status}: ${message}</p>`
  })
}

function getPosts() {
  fetch(POSTS)
  .then( res => res.ok ? res.json() : Promise.reject(res))
  .then( json => {

  })
  .catch( err => {
    console.log(err)
    let message = err.statusText || "Ocurrio un error"
    post.innerHTML = `<p>Error ${err.status}: ${message}</p>`
  })
}

d.addEventListener('DOMContentLoaded', e => {
  getSiteData()
  getPosts()
})