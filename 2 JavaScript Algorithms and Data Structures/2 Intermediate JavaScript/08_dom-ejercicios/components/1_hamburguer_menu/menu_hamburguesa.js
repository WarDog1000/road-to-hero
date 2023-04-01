/* **********     Curso JavaScript: 81. DOM: Ejercicios Prácticos | Menú de Hamburguesa - #jonmircha     ********** */
export default function hamburguerMenu(btn, panel) {
  // uso delegacion de eventos
  const d = document;
  d.addEventListener('click', e => {
    if(e.target.matches(btn) || e.target.matches(`${btn}*`)) {
      d.querySelector(panel).classList.toggle('is-active')
    }
  })
}
