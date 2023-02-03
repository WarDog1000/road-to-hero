// Funciones Flecha
const fecha = function () {
  return new Date();
};
console.log(fecha());

const fechaFlecha = () => new Date();
console.log(fechaFlecha());

// Funciones Flecha con Parametros
const flecha = (a) => {
  return a + 3;
};
console.log(flecha(3));

const concatenar = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(concatenar([1, 2, 3], [4, 5, 6]));

const sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};
console.log(sumar(2, 1));

// Volores por defecto
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(2));

const esposible = (a, b) => (a > b ? a : a + b);
console.log(esposible(4, 2));

// Operador Rest '...'
// Me permite agregar cualquier numero de argumentos cundo llamo a la funcion
function miRest(...args) {
  return args;
}
console.log(miRest(1, 2, 3, 4, 5));
console.log(miRest([1, 2, 3], [4, 5]));

const miFunction = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0); // reduce recorre y suma todos los elementos del arreglo
};

const miRestFunction = (...args) => {

  return args.reduce((a, b) => a + b, 0);
};
console.log(miRestFunction(1,2,3,4,5,6,7,8,9));

// Operador Spread
// descompone un parametro para que pueda ser utilizado
const numeros = [1,2,3];

function sumarSpread (x, y, z) {
  return x + y + z;
}

// sumarSpread(numeros[0], numeros[1], numeros[2]);
// sumarSpread(...numeros);
console.log(sumarSpread(...numeros));