const main = document.querySelector('main')

const getHTML = (options) => {
  let {url, success, error} = options
  const xml = new XMLHttpRequest()
  xml.addEventListener('readystatechange', e => {
    if(xml.readyState !== 4) return
    if (xml.status >= 200 &&xml.status < 300) {
      let html = xml.responseText
      success(html)
    } else {
      let message = xml.statusText || "Ocurrio un error!"
      error(`Error ${xml.statusText}: ${message}`)
    }
  })

  xml.open("GET", url)
  xml.setRequestHeader('Content-Type', 'text/html; charset=utf-8')
  xml.send()
}

document.addEventListener('DOMContentLoaded', e => {
  // al cargar el documento de la pagina se llama a la funcion getHTML para cargar la seccion "home"
  getHTML({
    url: "pages/home.html",
    success: (html) => main.innerHTML = html,
    error: (err) => main.innerHTML = `<h1>${err}</h1>`
  })
})

const navLink = document.querySelectorAll('.menu a')
// console.log(navLink)
navLink.forEach( el => {
  el.addEventListener('click', e => {
    
  })
})

document.addEventListener('click', e => {
  if(e.target.matches('a')) {
    getHTML({
      url: e.target.href,
      success: (html) => main.innerHTML = html,
      error: (err) => main.innerHTML = `<h1>${err}</h1>`
    })
  }
})
