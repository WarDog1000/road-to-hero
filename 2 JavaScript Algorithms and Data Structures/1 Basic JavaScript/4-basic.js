// Funciones    02:19:00
var a = 1;
var b = 2;
var suma;
function mifuncion() {
	return suma = a + b;
}

mifuncion();
suma

// Argumentos
function sumar(arg1, arg2) {
	return suma = arg1 + arg2;
}
sumar(5, 5);
suma

sumar(a, b);
suma

// Ambito global
var miVariableGlobal = 5; // se puede acceder y modificar en cualquier lugar del progranma
function laFuncion() {
	return miVariableGlobal;
}

miVariableGlobal

// Ambito local
function laOtraFuncion() { // variable que se define dentro de una funcion y solo se puede usar dentro de esa funcion
	var miVariableLocal = 4;
}

// miVariableLocal // ReferenceError: miVariableLocal is not defined


// Ambito global vs Ambito Local
var miNombre = 'Nora';

function mostrarMiNombre() {
	var miNombre = 'Gino'; // la variable local tiene mayor prioridad
	console.log(miNombre);
}

mostrarMiNombre(); // Gino
miNombre

// Retornar un valor
function retornadora() {
	return null;
}

console.log(retornadora());

// undefined
function retornaUndefined (arg1, arg2){
	console.log(arg1 + arg2);
}

console.log(retornaUndefined(5, 3));

// Asignar un valor Retornado
function retornable(arg1, arg2) {
	return arg1 + arg2;
}

suma = retornable(5, 3);
suma

// Permanece en fila

/*
En informatica una cola (queue) es una estructura de datos abstracta
en la cual los elementos se mantinen en orden. Los nuevos elementos se pueden
añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una fucion proximoEnLaFila que tome un arreglo y un numero (elemento)
como argumentos. Agrega el numero al final del arreglo y luego elimina el primero elemento del arreglo. La funcion debe retornar el elemto que fue removido.
*/

const arr = [1, 2, 3];
function lifo(array, arg1) { // LAST IN, FIRST OUT
	array.push(arg1);
	return array.shift();
}

console.log(lifo(arr, 4));
console.log(lifo(arr, 5));
console.log(lifo(arr, 6));
console.log(lifo(arr, 7));

console.log('Antes: '+ JSON.stringify(arr));
console.log(lifo(arr, 8));
console.log('Despues: '+ JSON.stringify(arr));


