/* **********     Curso JavaScript: 18. Destructuración - #jonmircha     ********** */
const numeros = [1, 2, 3];

//Sin destructuración
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

console.log(uno, dos, tres);

//Con destructuración
const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35,
};

let { nombre, edad, apellido } = persona;
console.log(nombre, apellido, edad);

let { nombre: miNombre, apellido: miApellido } = persona;
console.log(miNombre, miApellido);
