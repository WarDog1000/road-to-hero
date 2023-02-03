// Ciclo ´while'
var i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

var miArreglo = [];
while (i <= 10) {
  miArreglo.push(i);
  i++;
}
console.log(miArreglo);

var numeros = [2, 3, 4, 5, 6, 7, 8, 9];
while (numeros.length > 4) {
  numeros.pop();
}
console.log(numeros);

// Ciclo 'for'
for (var i = 0; i <= 5; i++) {
  numeros.push(i);
}
console.log(numeros);

for (var i = 0; i < 10; i = i + 2) {
  numeros.push(i);
}
console.log(numeros);

// Ciclos 'for': Numeros impares
var impares = [];
for (var i = 1; i < 20; i = i + 2) {
  impares.push(i);
}
console.log(impares);

var pares = [];
for (i = 2; i <= 20; i = i + 2) {
  pares.push(i);
}
console.log(pares);

// Ciclos 'for': Contar hacia atras
for (var i = 10; i >= 0; i--) {
  console.log(i);
}

var regresivo = [];
for (var i = 10; i > 0; i -= 2) {
  regresivo.push(i);
}
console.log(regresivo);

// Iterar sobre un arreglo con un ciclo 'for'
var newArray = [4, 6, 8, 2];
var total = 0;
for (var i = 0; i < newArray.length; i++) {
  total += newArray[i];
}
console.log(total);

var lenguajes = ["JavaScript", "Python", "Java", "C++"];
for (var i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i].toUpperCase());
}

function contarNumerosPares(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      total++;
    }
  }
  return total;
}

console.log(contarNumerosPares(numeros));

// Ciclos 'for' Anidados
numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  var arregloAnidado = numeros[i];
  for (var j = 0; j < arregloAnidado.length; j++) {
    console.log(arregloAnidado[j]);
  }
}

// Ciclos 'do...while'
var x = 5;
while (x < 10) {
  console.log(x);
  x++;
}

do {
  console.log(x);
  x++;
} while (x < 10);

// Busqueda de Perfil
var contactos =[
  {
  nombre: 'Nora',
  apellido: 'Nav',
  numero: '0543236543',
  gustos: ['pizza', 'programacion']
},
{
  nombre: 'Harry',
  apellido: 'Potter',
  numero: '0994372684',
  gustos: ['Hogwarts', 'magia']
},
{
  nombre: 'Sherlock',
  apellido: 'Holmes',
  numero: '0487345643',
  gustos: ['casos interesantes', 'violin']
}
];

function buscarPerfil(nombre, propriedad) {
  for(var i =0; i < contactos.length; i++) {
    if(contactos[i].nombre === nombre){
      return contactos[i][propriedad] || 'La propriedad no existe';
    }
  }
  return 'nombre no encontrado' + i;
}

console.log(buscarPerfil('Nora', 'gustos'));
console.log(buscarPerfil('Harry', 'apellido'));
