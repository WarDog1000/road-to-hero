// Arreglos (Arrays)
var miArreglo = ['jhon', 24];
miArreglo

var estudiantes = ['Nora', 'Gino', 'Emily', 'Juan'];
estudiantes

var notas = [95, 67, 89, 100];
notas

// Arreglos anidados
miArreglo = [['Nora', 97], ['Gino', 78], ['Emily', 89]];
miArreglo

var listaDeProductos = [['Camisas', 5.67, 'S1234'], ['Celulares', 250, 'S356'], ['Zapatos', 36.7, 'S678']]
listaDeProductos

var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8],];
datos

// Aceder a los elementos de un arreglo
miArreglo = [10, 20, 30];

/*
Arrelo: [10, 20, 30]
indice:  0   1   2
*/

var miIndice = miArreglo[0];
miIndice

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
suma

// Modificar elementos de un arreglo
miArreglo[0] = 40;
miArreglo

miArreglo[1] = 'Hola';
miArreglo

miArreglo[2] = [1, 2, 3];
miArreglo

// Acceder a arreglos Multidimensionales
miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
miArreglo
/*
Arreglo:           [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
Indice:                 0         1         2
Indice Interno:      0  1  2 | 0  1  2 | 0  1  2
*/

miIndice = miArreglo[0];
miIndice
miIndice = miArreglo[0][1];
miIndice

// Metodos de un arreglo
// .push()
miArreglo = ['invierno', 'otoño', 'primavera'];
miArreglo.push('verano'); // push añade un elemento al final de la arreglo
miArreglo

// .pop()
var miPop = miArreglo.pop(); // pop elimina el ultimo elemento del arreglo (tambien lo guarda)
miArreglo
miPop

// .shift
var miShift = miArreglo.shift(); // shift elimina el primer elemento del arreglo (tambien lo guarda)
miArreglo
miShift

// .unshift
miArreglo.unshift('vacasiones'); // unshift añade un elemento al principio del arreglo
miArreglo

// Lista de compras
var miLista = [['cereal', 3], ['leche', 4], ['refresco', 7]];
for(let i = 0; i < 3; i++){
	let voy = 'Voy a conprar '+miLista[1][1]+' unidades de '+miLista[1][0];
	console.log(voy);
}

