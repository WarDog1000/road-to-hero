/* **********     Curso JavaScript: 29. Operador de Cortocircuito - #jonmircha     ********** */
/*
    Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
*/
function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar("Jon"); // Hola Jon
saludar(); // Hola Desconocido

console.log("cadena" || "Valor de la derecha"); // cadena
console.log(19 || "Valor de la derecha"); // 19
console.log(true || "Valor de la derecha"); // true
console.log([] || "Valor de la derecha"); // []
console.log({} || "Valor de la derecha"); // {}
console.log(false || "Valor de la derecha"); // valor de la derecha
console.log(null || "Valor de la derecha"); // valor de la derecha
console.log(undefined || "Valor de la derecha"); //  valor de la deracha
console.log("" || "Valor de la derecha"); // valor de la derecha
console.log(-2 || "Valor de la derecha"); // -2
console.log(0 || "Valor de la derecha"); // valor de la derecha

console.log(false && "Valor de la derecha"); // false
console.log(null && "Valor de la derecha"); // null
console.log(undefined && "Valor de la derecha"); // undefined
console.log("" && "Valor de la derecha"); // ""
console.log(-2 && "Valor de la derecha"); // valor de la derecha
console.log(0 && "Valor de la derecha"); // 0

console.log("cadena" && "Valor de la derecha"); // valor de la derecha
console.log(19 && "Valor de la derecha"); // valor de la derecha
console.log(true && "Valor de la derecha"); // valor de la derecha
console.log([] && "Valor de la derecha"); // valor de la derecha
console.log({} && "Valor de la derecha"); // valor de la derecha
