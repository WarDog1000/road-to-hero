/* **********     Curso JavaScript: 49. Symbols - #jonmircha     ********** */

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

const NAME = Symbol("nombre");
const NAME2 = Symbol("nombre");

const persona = {
  [NAME]: "Jon",
  [NAME2]: "Rambo",
};
console.log(persona);

persona.NAME = "Capoeira";

console.log(persona);
console.log(persona.NAME);
console.log(persona[NAME]);

const SALUDAR = Symbol("saludo");

persona[SALUDAR] = () => console.log("Sapee!");

console.log(persona);
persona[SALUDAR]();

for (let propriedad in persona) {
  console.log(propriedad);
  console.log(persona[propriedad]);
  console.log(`${[propriedad]}: ${persona[propriedad]}`);
}

console.log(Object.getOwnPropertySymbols(persona));
