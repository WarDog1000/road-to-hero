// Numeros Aleatorios
function generarFraccionAleatoria() {
  return Math.random();
}

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());

console.log(Math.random());

// Numeros Enteros Aleatorios
var numeroEnteroAleatorio = Math.floor(Math.random() * 20);
console.log(numeroEnteroAleatorio);

function generarEnteroAleatorio(limiteSuperior) {
  // Generar un netero aleatorio entre 0 y el limite superior (sin incluirlo)
  return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 12; i++) {
  console.log(generarEnteroAleatorio(5));
}
 
// Numeros Enteros Aleatorios en un Rango 07:13:14
function rangoAleatorio(limiteInferior, limiteSuperior){
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

for (var i=0;i<10;i++){
  console.log(rangoAleatorio(3,4));
}

// Funcion '.parseInt()'
// '5' => 5
console.log(parseInt('3'));
console.log(parseInt('3.5'));
console.log(parseInt('-3'));
console.log(parseInt('c')); // Not a Number

// Funcion 'parseInt()' con una base
// Binarios 01
console.log(parseInt('110111', 2));
console.log(parseInt(110111, 2));
// Exadecimal
console.log(parseInt('3E0A', 16));
// console.log(parseInt(3E0A, 16));  // is not defined

// Operador Condicional (Ternario)
function retornarTernarioMinimo(x, y) {
  return x < y ? x : y; // si 'x' es menor que 'y'? return 'x' sino: return 'y'
}
console.log(retornarTernarioMinimo(2, 7));
console.log(retornarTernarioMinimo(4, 7));
console.log(retornarTernarioMinimo(8, 7));

var a = 5;
var b = 9;
console.log(a > b ? a + 2 : b * 3);

// Multiples operadores Condicionales (Ternarios)
function comparaNumeros(a, b) {
  if (a === b) {
    return " a y b son iguales";
  } else if (a > b) {
    return "a es mayor que b";
  } else {
    return "b es mayor que a";
  }
}

function ternarioCompararNumeros(a, b) {
  return a === b
    ? "a y b son iguales"
    : a > b
    ? "a es mayor que b"
    : "b es mayor que a";
}
console.log(ternarioCompararNumeros(2, 3));