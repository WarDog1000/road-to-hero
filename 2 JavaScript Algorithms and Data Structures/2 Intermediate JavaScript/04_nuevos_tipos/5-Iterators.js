/* **********     Curso JavaScript: 53. Iterables & Iterators - #jonmircha     ********** */

// const iterable = new Set([1, '2', 3, 3, ,4 ,5]);
// const iterable = 'Hola Mundo';
const iterable = new Map([["nombre", "jon"]]);
// Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();
while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
