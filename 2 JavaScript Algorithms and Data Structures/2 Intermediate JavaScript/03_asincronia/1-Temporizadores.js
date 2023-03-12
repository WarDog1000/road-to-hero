/* **********     Curso JavaScript: 44. Temporizadores (setTimeout & setInterval) - #jonmircha     ********** */

console.log("Inicio");

// =======================================================
setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejecuta una sóla vez");
}, 3000);

setInterval(() => {
  console.log(
    "Ejecutando un setInterval, esto se ejecuta indefinidaente cada cierto intervalo de tiempo"
  );
}, 3000);

// =======================================================
let timeOut = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);
console.log("después del clearTimeout");

// =======================================================
let interval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador);
console.log("después del clearInterval");
