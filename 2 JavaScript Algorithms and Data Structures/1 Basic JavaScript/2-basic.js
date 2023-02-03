// Variables con cadenas de caracteres
var nombre = 'Alan';
nombre
  
// Escapar comillas en cadenas de caracteres
var miCadena = 'soy una cadena de caracteres con \'comillas\''
miCadena

// cadenas de caracteres con comillas simples
var miMeta;
miMeta = 'Aprender a programar con "freeCodeCamp"';
miMeta

// Secuencias de escape
/*
Codigo | Resultado
------------------
\'      Comilla Simple
\"      Comilla Doble
\\      Barra Invertida
\n      linea Nueva
\r      Retorno de Carro
\t      Tabulacion
\b      Retroceso
\f      Salto de Pagina
...
*/

// Concatenar cadenas de caracteres
var nombreCompleto = 'Alan' + ' ' + 'Turing';
nombreCompleto

// Construir cadenas con variables
var verbo = 'programar';
var mensaje = 'Estoy aprendiendo a ' + verbo + ' con freeCodeCamp';
mensaje

// Concatenar cadenas asignadas a variables
var mensajeCompleto = 'Estoy aprendiendo a programar';
var parteFinal = 'con freeCodecamp';
mensajeCompleto
mensajeCompleto += parteFinal;
mensajeCompleto

// Longuitud de una cadena de caracter
miCadena = 'A B';
miCadena= 'JavaScript';
var longuitudCadena = miCadena.length;
longuitudCadena;

// Notacion de corchetes en javaScript
var lenguajeDeProgramacion = 'JavaScript';
/*
Cadena:     J a v a S c r i p t
Indice:     0 1 2 3 4 5 6 7 8 9
*/
var buscarCaracter = lenguajeDeProgramacion[0];
buscarCaracter

// Inmutabilidad de cadenas de caracteres
miCadena = 'Jola, Mundo';
miCadena
// miCadena[0] = 'H'; // error, read only
miCadena = 'Hola Mundo';
miCadena

// Acceder a los caracteres de una cadena
/*
Cadena:     J a v a S c r i p t
Indice:     0 1 2 3 4 5 6 7 8 9
*/

// buscarCaracter = miCadena[10]; // undefined, index not valid
// buscarCaracter = miCadena[1.5]; // undefined, index not valid

// Notacion de corchetes: Ultimo caracter
// El ultimo indice siempre es la longuitud -1 porque comenzamos a contar desde 0
miCadena = 'JavaScript';
var ultimaLetra = miCadena[miCadena.length - 1];
ultimaLetra

// Notacion de corchetes: De derecha a izquierda
miCadena = 'JavaScript';
// El penultimo indice es la longuitud -2 porque comenzamos a contar dede 0
ultimaLetra = miCadena[miCadena.length - 2];
ultimaLetra

// Palabras en blanco
var palabraEnBlanco = '';

var miSustantivo = 'perro';
var miAdjetivo = 'negro';
var miVerbo = 'corrio';
var miAdverbio = 'rapidamente';

//Historias Locas
/*  concatena cadenas para crear una cadena q2ue muestre un mensaje.
    Puedes cambiar los valores de las variables.
    Por ejemplo:    El perro corrio rapidamente a la tienda.
                    La bisicleta pequeña volo a la tienda lentamente.
*/
palabraEnBlanco = 'El ' + miSustantivo + ' ' + miAdjetivo + ' ' + miVerbo + ' ' + miAdverbio + ' a la tienda.';
palabraEnBlanco
