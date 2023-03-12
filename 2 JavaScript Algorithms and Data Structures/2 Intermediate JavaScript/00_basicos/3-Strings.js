/* **********     Curso JavaScript: 5. Cadenas de Texto (Strings) - #jonmircha     ********** */

//Cadenas de Texto aka Strings
let nombre = "Jon";
let apellido = "MirCha";
let saludo = new String("Hola Mundo");
let lorem =
  "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.      ";

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("amet"),
  lorem.includes("jon"),
  lorem,
  lorem.trim(),
  lorem.split(" "),
  lorem.split(",")
);
