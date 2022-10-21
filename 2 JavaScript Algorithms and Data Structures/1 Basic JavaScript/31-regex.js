// Curso JavaScript: 31. Expresiones Regulares
// g busca mas de una coinsidencia ("lorem","g")
// i ignora las mayusculas y minusculas ("lorem","i")
const expReg1 = new RegExp("lorem","ig");
const expReg2 = /lorem/ig;
const expReg3 = /[0-9]/ig;// rango de 0 a 9
const expReg4 = /lorem{1}/ig// numero de coinsidencias repetidas;
const expReg5 = /lorem{1,3}/ig// numero de coinsidencias repetidas de 1 hasta 3;
const expReg6 = /lorem{1,}/ig// numero de coinsidencias repetidas desde 1 hasta indefinidamente;
let cadena = "lorem ipsum dolor Lorem sit amet consectetur";

// test
console.log(expReg1.test(cadena));// conprueba true o false si la expresion existe en la cadena
// exec
console.log(expReg1.exec(cadena));// devuelve un arreglo con la coinsidencia y su indice

console.clear();