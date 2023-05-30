document.addEventListener('DOMContentLoaded', e => {
  const includeHTML = (el, url) => {
    // Create instance of XMLHttpRequest Object
    const xhr = new XMLHttpRequest()
    // Listen on event readystatechange
    xhr.addEventListener('readystatechange', (e) => {
      //  if not READY_STATE_COMPLETE
      if(xhr.readyState !== 4) return
      // if status is ok?
      if(xhr.status >= 200 && xhr.status < 300) {
        // Insert the response
        el.outerHTML = xhr.responseText
      } else {
        let message = xhr.statusText || "Error al cargar el archivo, verifique que estes haciendo la peticion por http o https"
        el.outerHTML = `<div><p>${xhr.status}: ${message}</p></div>`
      }

    })
      // Then OPEN request
      xhr.open("GET", url)
      // Set request header
      xhr.setRequestHeader("Content-Type", "text/html: charset=utf-8")
      // And SEND request
      xhr.send()
  }

  // Target all elements with data attributes [data-include] and iterate each elements
  document.querySelectorAll('[data-include]')
  .forEach(el => includeHTML(el, el.getAttribute('data-include')))
})

console.log('Hello from include-html.js')