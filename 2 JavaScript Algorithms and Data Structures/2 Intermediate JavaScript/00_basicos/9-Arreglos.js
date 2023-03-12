/* **********     Curso JavaScript: 11. Arreglos (Arrays) - #jonmircha     ********** */

const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);

colores.pop();
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});
