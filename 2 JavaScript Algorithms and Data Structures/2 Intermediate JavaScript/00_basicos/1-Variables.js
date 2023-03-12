/* **********     Curso JavaScript: 3. Variables: var 🥊VS🥊 let - #jonmircha     ********** */

var hola = "Hola Mundo";
let hello = "Hello World";
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);
//Ambito de bloque
//Esto es un bloque - comentario de una lines
/*
    Esto
    es
    un
    comentario
    de
    varias
    líneas */
console.log("****************var*****************");
var musica = "Rock";
console.log("Variable Música antes del Bloque", musica);
{
  var musica = "Pop";
  console.log("Variable Música dentro del Bloque", musica);
}
console.log("Variable Música después del Bloque", musica);
console.log("****************let*****************");
let musica2 = "Rock";
console.log("Variable Música antes del Bloque", musica2);
{
  let musica2 = "Pop";
  console.log("Variable Música dentro del Bloque", musica2);
}
console.log("Variable Música después del Bloque", musica2);
