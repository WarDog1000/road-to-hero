// Curso JavaScript: 28. Objeto Math
// es un objeto estatico, por lo cual lo debemos invocar desde el prototypo
console.log(Math);

console.log(Math.PI);
// valor absoluto de un numero
console.log(Math.abs(-7.8));
// redondea al numero entero posterior inmediato
console.log(Math.ceil(7.8));
// redondea al numero inmediato entero menor
console.log(Math.floor(7.8));
// redondea al numero entero mas cercano 
console.log(Math.round(7.8));
// raiz cuadrada √ 2
console.log(Math.sqrt(81));
// potenciacion base, exponente
console.log(Math.pow(2,2));
// indicador si es positivo+ negativo- o 0
console.log(Math.sign(-7.8));
// genera numeros aleatorios entre 0 - 1
console.log(Math.random());

console.log(Math.round(Math.random() * 1000));// de 0 a 1000

console.clear();