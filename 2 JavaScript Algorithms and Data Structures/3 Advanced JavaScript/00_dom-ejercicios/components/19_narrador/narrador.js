/* **********     Curso JavaScript: 104. DOM: Ejercicios Prácticos | Narrador (Lector de Voz) - #jonmircha     ********** */
const d = document,
      w = window

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        speechMsg = new SpeechSynthesisUtterance()

        // console.log($speechMsg)
  let voices = []

  // ============ DETECCION DE LA VOCES DE WINDOW ============
  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(w.speechSynthesis.getVoices())
    // agrega el evento de 'voiceschanged' a la instancia de window
    w.speechSynthesis.addEventListener('voiceschanged', e => {
      // console.log(e)
      // despues de activado el 'speechSynthesis' en window, obtiene un objeto con todas las voces detectadas con el metodo 'getVoices'
      voices = w.speechSynthesis.getVoices()
      console.log(voices)

      // por cada voz que se detecte, crea un option para el select
      voices.forEach(voice => {
        const $option = d.createElement("option")
        // se guarda en $option el nombre de la voz y su idioma
        $option.value = voice.name
        // se crea el texto del option segu el nombre la voz y su idioma
        $option.textContent = `${voice.name} ${voice.lang}`
        // se agrega el option al select <select><option>$#</option></select>
        $speechSelect.appendChild($option)
      })

    })
  })    

  // ============ HABLAR CON LA ACCION DE BOTON ============
  d.addEventListener('click', e => {
    // elimina el comportamiento por default del button
    e.preventDefault()
    // si el evento se origino en el elemento con id 'speech-btn'
    if(e.target === $speechBtn) {
      // asigna al atributo  'text' de la instancia 'speechMsg' de 'SpeechSynthesisUtterance()' el valor del textarea
      speechMsg.text = $speechTextarea.value
      // indica al atributo 'speechSynthesis' que debe empezar a hablar tomando como parametro la instancia 'speechMsg'
      w.speechSynthesis.speak(speechMsg)
    }
  })

  // ============ ASIGNACION DE VOZ SEGUN SELECCION ============
  d.addEventListener('change', e => {
    // si el evento ocurre en el elemento <select> con id 'speech-select'
    if(e.target === $speechSelect) {
      // utilizando el metodo '.find' para encontrar el elemento con el mismo valor seleccionado
      // y asignarlo al atributo 'voice' de la instancia 'speechMsg' de ' SpeechSynthesisUtterance()'
      speechMsg.voice = voices.find(voice => voice.name === e.target.value)
      console.log(speechMsg)
    
    }
  })

}