/* **********     Curso JavaScript: 51. Maps - #jonmircha     ********** */

const FUEGO = Symbol("tipo");

let mapa = new Map();
mapa.set("nombre", "Jon");
mapa.set("edad", 28);
mapa.set("animal", "perro");
// mapa.set(FUEGO, 'Fuego');
console.log(mapa);
console.log(mapa.get("nombre"));
console.log(mapa.size);
console.log(mapa.has("nombre"));
console.log(mapa.has("apellido"));

mapa.set("nombre", "salchichon");
console.log(mapa);

mapa.set("apellido", "rambo");
console.log(mapa);

mapa.delete("apellido");
console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`${key}: ${value}`);
}

const mapa2 = new Map([
  ["nombre", "Jon"],
  ["edad", 28],
  ["animal", "perro"],
  ["nulo", null],
]);
console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];
console.log(llavesMapa2);
console.log(valoresMapa2);
