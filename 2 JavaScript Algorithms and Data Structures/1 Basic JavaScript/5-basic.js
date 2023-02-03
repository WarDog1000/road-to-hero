// Valores Booleanos 02:57:00
var verdadero = true;
var falso = false;
verdadero
falso

// Operadores de igualdad

console.log( 5 == 5);
console.log( '5' == 5);
console.log( 'hola' == 'hola');
console.log( 'Hola' == 'hola');
console.log( [1,2,3] == [1,2,3]); // no reprenta el mismo object

//  Operador de estricta igualdad
console.log( 5 === 5);
console.log( '5' === 5);
console.log( 'hola' === 'hola');
console.log( 'Hola' === 'hola');
console.log( [1,2,3] === [1,2,3]);

// Practica de comparar valores
var a;
var b;

a = 5;
b = 5;

console.log(a == b);
console.log(a === b);

b = 8;

console.log(a == b);
console.log(a === b);

b = '5';

console.log(a == b);
console.log(a === b);

// Operador de desigualdad

console.log(1 != 1);
console.log(1 != '1');
console.log('1' != '1');
console.log(1 != 2);
console.log([1,2,3] != [1,2,3]);

// Operador de desigualdad esctricta
console.log(1 !== 1);
console.log(1 !== '1');
console.log('1' !== '1');
console.log(1 !== 2);
console.log([1,2,3] !== [1,2,3]);

// Operador 'Mayor que'
console.log(3 > 2);
console.log(1 > 2);
console.log('a' > 'b');
console.log('b' > 'a');
console.log('acb' > 'abc');
console.log('ab' > 'a');
console.log('mundo' > 'hola mundo');

// Operador 'Mayor igual'
console.log(1 >= 1);
console.log(3 >= 2);
console.log(1 >= 2);
console.log('a' >= 'a');
console.log('b' >= 'a');
console.log('a' >= 'b');
console.log('b' >= 'a');

// Operador 'Menor que'
console.log(3 < 2);
console.log(1 < 2);
console.log('a' < 'b');
console.log('b' < 'a');
console.log('acb' < 'abc');
console.log('ab' < 'a');
console.log('mundo' < 'hola mundo');

// Operador 'Menor igual'
console.log(1 <= 1);
console.log(3 <= 2);
console.log(1 <= 2);
console.log('a' <= 'a');
console.log('b' <= 'a');
console.log('a' <= 'b');
console.log('b' <= 'a');

// Operador logico 'AND'
/*
Tabla de verdad del operador AND
Para: X && Y
|	X	|	Y	|	X	&&	Y	|
-------------------
|	T	|	T	|	T |
|	T	|	F	|	F |
|	F	|	T	|	F |
|	F	|	F	|	F |
La expresion solo es verdadera CUANDO AMBOS operadores son verdaderos.
*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Operador logico 'OR'
/*
Tabla de verdad del operador OR
Para: X || Y
|	X	|	Y	|	X	||	Y	|
-------------------
|	T	|	T	|	T |
|	T	|	F	|	T |
|	F	|	T	|	T |
|	F	|	F	|	F |
La expresion es verdadera SI ALGUNO DE LOS DOS operadores O AMBOS son verdaderos.
*/
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Operador logico 'NOT'
/*
Tabla de verdad del operador NOT
Para: !X
|	X	|	!X	|
-----------
|	T	|	F	|
|	F	|	T	|
La expresion es verdadera SI ALGUNO DE LOS DOS operadores O AMBOS son verdaderos.
*/
console.log(!true);
console.log(!false);
console.log((1 > 2));
console.log(!(1 > 2));