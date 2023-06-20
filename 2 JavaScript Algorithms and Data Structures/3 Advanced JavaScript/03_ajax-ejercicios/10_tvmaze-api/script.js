const d = document,
section = d.getElementById("section")
template = d.getElementById("template").content,
fragment = d.createDocumentFragment()

d.addEventListener('keypress', async e => {
  if(e.target.matches("#search") ) {
    if(e.key === "Enter") {
      
      try {
        
        section.innerHTML = `<img class="loader" src="loader.svg" alt="loader">`
        
        let query = e.target.value
        let api = `https://api.tvmaze.com/search/shows?q=${query}`
        let noImg = `https://api.tvmaze.com/images/no-img/no-img-portrait-text.png`
        
        let res = await fetch(api)
        let json = await res.json()
        
        console.log(api, res, json)
        
        if(!res.ok) throw {status: res.status, statusText: res.statusText}

        if(json.length === 0) {
          section.innerHTML = `<h2>${query}, No results found</h2>`
        } else {
          json.forEach( el => {
            template.querySelector("h3").textContent = el.show.name
            template.querySelector("div").innerHTML = el.show.summary ?
              el.show.summary : "No description"
            template.queryselector("img").src = el.show.image ?
              el.show.image.medium : noImg
            template.querySelector("img").alt = el.show.name
            template.querySelector("img").style.maxWidth = "100%"
            template.querySelector("a").href = el.show.url ?
              el.show.url : "#"
            template.querySelector("a").target = el.show.url ?
              "_blank" : "_self"
            template.querySelector("a").textContent = el.show.url ?
              "ver mas" : ""

            let clone = d.importNode(template, true)
            fragment.appendChild(clone)
          })

          section.appendChild(fragment)
        }
        
      } catch (error) {
        let message = error.statusText || "Ocurrio un error"
        section.innerHTML = `<p>Error ${error.status}: ${message}</p>`
      }
      
    }
  }
})