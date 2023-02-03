// var vs. let
var campista = "james";
var campista = "david";
campista;

let lenhador = "pedro";
// let lenhador = 'marcelo'; // SyntaxError: unknown: Identifier 'lenhador' has already been declared.
lenhador;
lenhador = "marcelo";
lenhador;

var mivariableglobal = 4;
function miFuncion() {
  var mivariablelocal = 8;
  console.log(mivariableglobal);
  console.log(mivariablelocal);
  return mivariableglobal;
}
console.log(miFuncion());
mivariableglobal;
// mivariablelocal // error: is not defined

// ambito: donde estan declaradas las funciones y variables
// bloque: corresponde a las partes de codigo dentro del ambito
// var: se encuentra accesible dentro del ambito y fuera del bloque. Puede volver a ser declarada.
// let: se encuentra acesible si esta declarada en el ambito y no puede ser acedida fuera del bloque. No puede volver a ser declarada

// const
// Una ves declarada, no puede ser modificada
const miConstante = 35;
miConstante
// miConstante = 33 // erro: is read-only

function calcularAreaCirculo(radio) {
	const PI = 3.14;
	if (radio < 0){
		return undefined;
	}
	return PI * (radio ** 2);
}
console.log(calcularAreaCirculo(10));

// Mutar Arreglo declarado con 'const' 07:49:31
const MI_ARREGLO = [1, 2, 3, 4];

// MI_ARREGLO = [] // error: asignament constant variable

MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;
MI_ARREGLO;

// Crear un Objeto Inmutable
let colores = {
	verde: '#10e04b',
	azul: '1b50e0',
	negro: '#000000',
	blanco: '#ffffff'
};

Object.freeze(colores);

colores.amarillo = '#fff200';
console.log(colores)