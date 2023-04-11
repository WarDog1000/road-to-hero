/* **********     Curso JavaScript: 91. DOM: Ejercicios Prácticos | Responsive Tester - #jonmircha     ********** */
const d = document
export default function responsiveTester(idForm) {
  const $form = d.getElementById(idForm)
  let tester
  d.addEventListener('submit', e => {
    if(e.target === $form) {
      e.preventDefault()
      
    }
  })
}