// Sintaxis de Desestructuracion
const usuario = {
    nombre: 'Gino',
    edad: 34
};

const miNombre = usuario.nombre;
const miEdad = usuario.edad;
miNombre
miEdad
// con Desestructuracion
const {nombre, edad} = usuario;
nombre
edad

var coordenadas = {
    x: 4,
    y: 6,
    z: 12
}
const miX = coordenadas.x;
const miY = coordenadas.y;
const miZ = coordenadas.z;
miX
miY
miZ
// con desestructuracion
const {x, y, z} = coordenadas;
x
y
z

// Sintaxis de Desestructuracion: Objetos Anidados
const miUsuario = {
   jhonDoe: {
    age: 27,
    correo: 'jhondoe@gmail.com'
   } 
};
const {jhonDoe: {age, correo}} = miUsuario;
age
correo

const {jhonDoe:{age: miAge, correo: miMail}} = miUsuario;
miAge
miMail

const PRONOSTICO_LOCAL = {
    ayer: {
        minima: 61,
        maxima: 75
    },
    hoy: {
        minima: 64,
        maxima: 77
    },
    manhana: {
        minima: 68,
        maxima: 80
    }
};

const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;
minimoHoy
maximaHoy

// con desestruracion
const {hoy:{minima: minimaDeHoy, maxima: maximaDeHoy}} = PRONOSTICO_LOCAL;
minimaDeHoy
maximaDeHoy

// Sintaxis de Desestructuracion con Arreglos
var a;
var b;
[a, b] = [1, 2];
a
b

[a, b] = [1, 2, 3, 4, 5, 6];
a
b

var c;
[a, b,,,c] = [1, 2, 3, 4, 5, 6];
a
b
c


var a = 8;
var b = 6;
[b, a] = [a, b];
a
b

// Sintaxis de Desestructuracion con el Operador 'rest'
var a, b, c;
[a, b, ...c] = [1, 2, 3, 4, 5, 6];

a
b
c

const arr1 = [1, 2, 3, 4, 5, 6];
function removerTresPrimeros (arr) {
    const [ , , , ...newArr] = arr;
    return newArr;
}
console.log(removerTresPrimeros(arr1))

// Sintaxis de Desestructuracion: Pasar Objetos como Argumentos
var nuevoPerfilCliente = {
    nombre: 'Jane Doe',
    edad: 24,
    nacionalidad: 'Espanhola',
    ubicacion: 'Espanha'
};
const actualizarPerfil = (info) => {
    const {nombre, edad, nacionalidad, ubicacion} = info;
    return nombre+', '+edad+', '+nacionalidad+', '+ubicacion;
};
console.log(actualizarPerfil(nuevoPerfilCliente));

// con desestructuracion
const actualizarPerfilII = ({nombre, edad, nacionalidad, ubicacion}) => {
    return nombre+', '+edad+', '+nacionalidad+', '+ubicacion;
};
console.log(actualizarPerfilII(nuevoPerfilCliente));

const estadisticas = {
    max: 58,
    desviaciones: 4134,
    mediana: 34,
    moda: 23,
    min: -0.74,
    promedio: 35.85
};

const mitad = (stats) => (stats.max + stats.min) / 2.0;
// con desestructuracion
const mitadII = ({max, min}) => (max + min) / 2.0;
a = mitad(estadisticas);
a
b = mitadII(estadisticas);
b