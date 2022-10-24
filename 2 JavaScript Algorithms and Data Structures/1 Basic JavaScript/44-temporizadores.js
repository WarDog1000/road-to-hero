// Curso JavaScript: 44. Temporizadores (setTimeout & setInterval) 
//setTimeout(() => {}, timeout); tras haber pasado dicha cantidad de tiempo, se ejecutara lo que este dentro de la funcion
// ejecucion despues de mil milisegundos, un segundo
// setTimeout(() => {
//     console.log('Ejecutado despues de un segundo');
// }, 1000);

// setTimeout(() => {
//     console.log('Ejecutado despues de dos segundo');
// }, 2000);

// setTimeout(() => {
//     console.log('Ejecutado despues de tres segundo');
// }, 3000);

// setInterval(() => {}, interval); se ejectuta inmediatamente cada cierto intervalo de tiempo
// let i = 0;
// // se ejecuta cada un segundo
// setInterval(() => {
//     console.log(`${i++} segundos`);
// }, 1000);

// // colocar un reloj
// setInterval(() => {
//     console.log(new Date().toLocaleTimeString())
// }, 1000);

// limpiar setTimeout
// let temporizador = setTimeout(() => {
//     console.log(new Date().toLocaleTimeString());
// }, 1000);
// clearTimeout(temporizador);
// console.log('despues del clearTimeout');

let temporizador = setInterval(() => {
    console.log(`${i++} segundos`);
}, 1000);
clearInterval(temporizador);// rebibe un objeto que tenga un setInterval y lo detiene

// ejemplo,  cuenta regresiva de 10
let i = 10;
let regresiva = setInterval(() => {
    console.log(`${i--}`)
}, 1000);

let stop = setTimeout(() => {
 clearTimeout(regresiva);
}, 1);// <= 11000

