/* **********     Curso JavaScript: 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) - #jonmircha     ********** */
const d = document
export function shortcuts(e) {
  console.log(`type = ${e.type}`)
  console.log(`key = ${e.key}`)
  console.log(`keyCode = ${e.keyCode}`)
  console.log(`crtlKey = ${e.ctrlKey}`)
  console.log(`altKey = ${e.altKey}`)
  console.log(`shiftKey = ${e.shiftKey}`)
  console.log(e)
  console.clear()
  
  // Atajo de teclado a + alt
  if(e.key === 'a' && e.altKey) {
    alert(`Haz lanzado un alerta con el atajo de teclado 'a + alt'`)
  }
  if(e.key === 'c' && e.altKey) {
    confirm(`Haz lanzado un confirm con el atajo de teclado 'c + alt'`)
  }
  if(e.key === 'p' && e.altKey) {
    prompt(`Haz lanzado un prompt con el atajo de teclado 'p + alt'`)
  }
}

let x = 0, y = 0
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect()

  switch (e.keyCode) {
    // left
    case 37:
      if(limitBall.left > limitStage.left) {
        e.preventDefault()
        x--
      } 
      break
    // up
    case 38:
      if(limitBall.top > limitStage.top) {
        e.preventDefault()
        y--
      } 
      break
    // right
    case 39:
      if(limitBall.right < limitStage.right) {
        e.preventDefault()
        x++
      } 
      break
    // down
    case 40:
      if(limitBall.bottom < limitStage.bottom) {
        e.preventDefault()
        y++
      } 
      break
    default:
      break
  }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}