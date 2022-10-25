// Curso JavaScript: 34. Ejercicios de Lógica de Programación ( 1 / 10 )

let string = "Hola_Mundo";
let num = 4;
let charact = '_';
let iter = 3;

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
((cb = '') => {
    (typeof cb === 'string' || cb instanceof String)
        ?console.log(cb.length)
        :console.log('Cadena no valida')
})(string);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
((s, n) => console.log(s.slice(0, n)))(string, num);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
(s => console.log(s.split(charact)))(string, charact);

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
((s, itr) => {
    let output = [];
    for (let i = 0; i < itr; i++) {
        output.push(s.split());
    }
    console.log(output.join(' '));
})(string, iter);

console.clear();

