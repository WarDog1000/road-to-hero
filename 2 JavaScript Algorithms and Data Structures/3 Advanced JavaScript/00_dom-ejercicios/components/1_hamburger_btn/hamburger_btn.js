/* **********     Curso JavaScript: 81. DOM: Ejercicios Prácticos | Menú de Hamburguesa - #jonmircha     ********** */
export default function hamburgerBtn(btn, panel, link) {
  const d = document

  d.addEventListener('click', e => {
    // si el clik coinside con el btn o cualquier hijo del btn, añade la clase is-active a este y al panel
    (e.target.matches(btn) || e.target.matches(`${btn} *`))
    ? d.querySelector(panel).classList.toggle('is-active')
    && d.querySelector(btn).classList.toggle('is-active')
    
    // si el clik coinside con el link o cualquier hijo del btn, elimina la clase is-active del btn y del panel
    : (e.target.matches(link))
    ? d.querySelector(panel).classList.remove('is-active')
    && d.querySelector(btn).classList.remove('is-active')
    
    : null
  })
}