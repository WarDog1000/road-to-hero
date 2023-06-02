const main = document.querySelector('main'),
files = document.getElementById('files')

const uploader = (file) => {
  console.log(file)
  // Instance of XMLHttpRequest Object
  const xml =  new XMLHttpRequest()
  // Create new Object form data
  const formData = new FormData()
  // Add name "file" of element file to formData
  formData.append("file", file)

  // Listen for changes in xml Object
  xml.addEventListener('readystatechange', e => {
    //  READY_STATE_COMPLETE
    if(xml.readyState !== 4) return
    // if request is successful
    if(xml.status >= 200 && xml.status < 300) {
      // console.log(xml.responseText)
      // obtain RESPONSE object
      // let json = xml.responseText // tambin funciona porque desde el server manda la respuesta en formato json
      let json = JSON.parse(xml.responseText)
      console.log(json)
    } else {
      let message = xml.statusText || "Ocurrio un error!"
      console.error(`Error ${xml.statusText}: ${message}`)
    }

  })

  // Open request to uploader
  xml.open("POST", "server/uploader.php")
  // Set headers
  xml.setRequestHeader("enc-type", "multipart/form-data")
  // Send REQUEST
  xml.send(formData)

}

document.addEventListener('change', e => {
  if(e.target === files) {
    console.log(e.target.files)
    
    // Convert on iterable object
    const files = Array.from(e.target.files)

    // For each elements in file, execute the callback function
    files.forEach( el => uploader(el))
  
  }
})