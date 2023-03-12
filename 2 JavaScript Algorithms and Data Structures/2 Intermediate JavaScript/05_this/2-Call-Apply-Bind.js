/* **********     Curso JavaScript: 58. call, apply, bind - #jonmircha     ********** */
// console.log(this === window); // true

// en scope global
this.nombre = 'Contexto global de window';
console.log(this);

function imprimir() {
  console.log(this.nombre); // Imprime Contexto global de window
}
imprimir();

// en scope de bloque
const obj1 = {
  nombre: 'Contexto Objeto 1',
  imprimir: function() {
    console.log(this.nombre);
  }
}
obj1.imprimir();

const obj2 = {
  nombre: 'Contexto Objeto 2',
  /* imprimir: imprimir */ imprimir // Imprime Contexto Objeto2
}
obj2.imprimir();

// con arrow functions
const obj3 = {
  nombre: 'Contexto Objeto 3',
  imprimir: () => console.log(this.nombre)
}
obj3.imprimir(); // Imprime Contexto global de window

// Las arrow function, no generan scope interno, toman el hambito del 'Objeto' padre
const obj4 = {
  nombre: 'Contexto Objeto 4',
  hijo: {
    nombre: 'Objeto hijo',
    imprimir: () => console.log(this.nombre)
  }
}
obj4.hijo.imprimir(); // Imprime Contexto globl de window

// ========================================================================
function Persona1(nombre) {
  this.nombre = nombre;
  return console.log(this.nombre);
}
let jon = new Persona1('Jon');
jon;

// ========================================================================
function Persona2(nombre) {
  this.nombre = nombre;
  // Closure
  return function() { // La funcion anonima define un nuevo ambito sin la propriedad del Objeto padre
    console.log(this.nombre);
  }
}
let denis = new Persona2('denis');
denis();

// ========================================================================
function Persona3(nombre) {
  this.nombre = nombre;
  return () => console.log(this.nombre);
}
let lucas = new Persona3('lucas');
lucas();