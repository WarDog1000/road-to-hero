Temas
- Isomorfismo
- JavaScript NO es JAVA
- Características
- Escritura de código
- Palabras reservadas
- Ordenamiento de código
- Tipos de datos en JavaScript

## Isomorfismo
Hoy JavaScript, es el único lenguaje capaz de ejecutarse en las 3 capas de una aplicación:

- Frontend (con JavaScript).
- Backend (con Node.js).
Persistencia de Datos (con MongoDB, Couch DB, Firebase, etc).

Con JavaScript puedes:

Diseño y Desarrollo Web.
Hacer Videojuegos.
Experiencias 3D, Realidad Aumentada, Realidad Virtual.
Controlar Hardware (drones, robots, electrodomésticos, wearables, etc).
Aplicaciones Híbridas y Móviles.
Aprendizaje Automático.
etc.

## Características
- Lenguaje de Alto Nivel.
- Interpretado.
- Dinámico.
- Débilmente Tipado.
- Multi paradigma.
- Sensible a MAYÚSCULAS y minúsculas.
- No necesitas los puntos y comas al final de cada línea.

## Escritura de código
Los identificadores deben comenzar con:

- Una letra o
- Un signo de dolar $ o
- Un guión bajo _
- Nunca con números o caracteres especiales.

Usa ***snake_case*** en:
- Nombre de archivos:
```
mi_archivo_javascript.js;
```

Usa ***UPPER_CASE*** en:
- Constantes:
```
const UNA_CONSTANTE = "Soy una constante",
  PI = 3.141592653589793;
```

Usa ***UpperCamelCase*** en:
- Clases:
```
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}
```

Usa ***lowerCamelCase*** en:
- Objetos:
```
const unObjeto = {
  nombre: "Jonathan",
  email: "jonmircha@gmail.com"
};
```
- Primitivos:
```
let unaCadena = "Hola Mundo",
  unNumero = 19,
  unBoolean = true;
```
- Funciones:
```
function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Jonathan");
```
- Instancias:
```
const ajax = new XMLHttpRequest(),
  jon = new SerHumano("Jonathan", "Hombre");
```

## Palabras reservadas
```
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with
```

## Ordenamiento de código
- 1-IMPORTACIÓN DE MÓDULOS.
- 2-DECLARACIÓN DE VARIABLES.
- 3-DECLARACIÓN DE FUNCIONES.
- 4-EJECUCIÓN DE CÓDIGO.

## Tipos de datos en JavaScript

**Primitivos**: Se accede directamente al valor.

- string
- number
- boolean
- null
- undefined
- NaN

**Compuestos**: Se accede a la referencia del valor.

- object = {}
- array = []
- function () { }
- Class {}
- etc.