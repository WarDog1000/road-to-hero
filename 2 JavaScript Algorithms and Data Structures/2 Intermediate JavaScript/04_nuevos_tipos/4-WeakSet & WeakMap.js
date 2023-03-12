/* **********     Curso JavaScript: 52. WeakSets & WeakMaps - #jonmircha     ********** */

// ==================================== WEAKSETS ====================================
// const ws = new WeakSet([1, 2, 3, 4, 5, true]); // error!
// Si en algun momento las propriedades presentes en weaksets se convierten en valores null o undefined, se eliminan automaticamente.

const ws = new WeakSet();
let valor1 = { valor1: 1 };
let valor2 = { valor1: 2 };
let valor3 = { valor1: 3 };
ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws.has(valor1));
console.log(ws.has(valor2));

ws.delete(valor2);
console.log(ws.has(valor2));

// setInterval(() => console.log(ws), 1000)
setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 1000);

// ==================================== WEAKMAPS ====================================
// const wm = new WeakMap([
//   ['nombre', 'jon'],
//   ['apellido', 'salchichon'],
//   ['nulo', null]
// ]); // error!
const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));
console.log(wm.get(llave1));
console.log(wm.get(llave3));

wm.delete(llave1);
console.log(wm.get(llave1));

wm.set(llave1, 1);
wm.set(llave2, 2);
wm.set(llave2, 3);
console.log(wm);
