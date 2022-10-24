// Curso JavaScript: 36. Ejercicios de Lógica de Programación ( 3 / 10 )

let string = "Hola_Mundo_adios_Mundo";
let num = 5;
let charact = '_';
let iter = 3;
let p = 'Mundo';
let palin = 313;

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
(() => console.log(500 + (Math.round(Math.random() * 100))))();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
(p => {
    (p.toString().split('').reverse().join('') == p.toString()) 
    ? console.log("Es capicua") 
    : console.log("No es capicua")
})(palin);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
(n => {
    let fact = []
    for(let i=1; i<=n;i++){
        fact.push(i);
    }
    console.log(fact.reduce((a,b) => a * b))
})(num);

console.clear();