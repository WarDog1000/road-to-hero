// Curso JavaScript: 35. Ejercicios de Lógica de Programación ( 2 / 10 )

let string = "Hola_Mundo_adios_Mundo";
let num = 4;
let charact = '_';
let iter = 3;
let p = 'Mundo';
let palin = 313;

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
(s => {
    (typeof s === 'string' || s instanceof String)
        ? console.log(string.split('').reverse().join(''))
        : console.log('Cadena no valida')
})(string);

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
((s, p) => {
    let output = [];
    if (typeof s === 'string' || s instanceof String) {
        s.split('_').map(el => { if (el === p) { output.push(el) } });
        console.log(output.length);
    } else { console.log('Cadena no valida') }
})(string, p);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
(s => {
    let output = s.toString();
    (output.split('').reverse().join('') === output)
        ? console.log(`${s} es un palindromo`)
        : console.log(`${s} NO es un palindromo`)
})
    (palin);


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
((s, p) => {
    let output = [];
    if (typeof s === 'string' || s instanceof String) {
        s.split('_').map(el => { if (el !== p) { output.push(el) } });
        console.log(output.join('_'));
    } else { console.log('Cadena no valida') }
})(string, p);