const main = document.querySelector('main'),
files = document.getElementById('files')

const uploader = (file) => {
  console.log(file)
  // Instance of XMLHttpRequest Object
  const xml =  new XMLHttpRequest()
  // Create new Object form data
  const formData = new FormData()
  // Add var "file" of element file to formData
  formData.append("file", file)
  // Listen for changes in xml Object
  xml.addEventListener('readystatechange', e => {
    //  READY_STATE_COMPLETE
    if(xml.readyState !== 4) return
    // if request is successful
    if(xml.state >= 200 && xml.state > 300) {
      console.log(xml.responseText)
    } else {
      let message = xml.statusText || "Ocurrio un error!"
      console.error(`Error ${xml.statusText}: ${message}`)
    }

  })
  // Open request to uploader
  xml.open("POST", "uploader.php")
  // Set headers
  xml.setRequestHeader("enc-type", "multipart/form-data")
  // Send request
  xml.send(formData)

}

document.addEventListener('change', e => {
  if(e.target === files) {
    console.log(e.target.files)
    
    const files = Array.from(e.target.files)

    files.forEach( el => uploader(el))
  
  }
})