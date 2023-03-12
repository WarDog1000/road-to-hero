/* **********     Curso JavaScript: 54. Generators - #jonmircha     ********** */
function* iterable() {
  // yield /* == return */
  yield "Hola";
  console.log("Hola Consola");
  yield "Hola 2";
  console.log("Seguimos con mas instrucciones de nuestro codigo");
  yield "Hola 3";
  yield "Hola 4";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(value) {
  setTimeout(
    () => console.log({ value, resultado: valor * valor }),
    Math.random() * 1000
  );
  return { value, resultado: value * value };
}

function* generador() {
  console.log("Inicia Generator");
  yield cuadrado(0);
  console.log("Termina Generator");
}
