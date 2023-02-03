// Crear Objetos
let miPerro = {
  nombre: 'Gino',
  peso: 6,
  edad: 5,
  raza: 'beagle',
};

// Acceder a Propriedades: Notacion de Puntos
let miGato = {
  nombre: 'Salem',
  edad: 6,
  raza: 'lanudo',
};

console.log(miGato.nombre);
console.log(miGato.edad);
console.log(miGato.raza);

// Acceder a Propriedades: Notacion de Corchetes
let miMoto = {
  color: 'negro',
  modelo: 'chooper',
  motor: 250,
  numeroPatente: 'hd250A',
  'anho de fabricacion': '2009',
};

console.log(miMoto['color']);
console.log(miMoto['anho de fabricacion']);

// Acceder a propriedades: Variables
let resultados = {
  1: 'negro256',
  2: 'gino577',
  3: 'estef543',
  4: 'cj1999',
};

let posicion = 4;

console.log(resultados[posicion]);

// Actualizar Propriedades
let mochila = {
  color: 'rosa',
  tamaño: 'mediano',
  contenido: ['pala', 'cuchara de albañil', 'martillo'],
};

console.log(mochila.color);

mochila.color = 'verde';

console.log(mochila.color);

console.log(mochila.contenido);

mochila.contenido.push('lapiz');

console.log(mochila.contenido);

mochila.contenido = [];

console.log(mochila.contenido);

mochila['contenido'] = ['newArrayItem'];
mochila['contenido'].push('brownies');

mochila;

// Agregar Propriedades
let curso = {
    titulo: 'Aprende JavaScript desde Cero',
    idioma: 'español',
    duracion: 8
};

curso.vistas = 34500;
console.log(curso.vistas);
console.log(curso['vistas']);

curso['likes'] = 42427;
console.log(curso.likes);
console.log(curso['likes']);

// Eliminar Propriedades
curso
delete curso.duracion;
curso;

// Objetos para Busquedas
function buscarElementoQuimico(simbolo) {
    // let elementoQuimico = '';
    // switch (simbolo) {
    //     case 'AL':
    //         elementoQuimico = 'Aluminio';
    //         break;
    //     case 'S':
    //         elementoQuimico = 'Azufre';
    //         break;
    //     case 'CL':
    //         elementoQuimico = 'Cloro';
    //         break;
    //     case 'HE':
    //         elementoQuimico = 'Helio';
    //         break;
    //     case 'B':
    //         elementoQuimico = 'Boro';
    //         break;
    //     case 'LI':
    //         elementoQuimico = 'Litio';
    //         break;
    // }
    // return elementoQuimico;

    let simbolosQuimicos = {
        AL: 'Aluminio',
        S: 'Azufre',
        CL: 'cloro',
        HE: 'Helio',
        B: 'Boro',
        LI: 'Litio'
    };
    return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico('AL'));
console.log(buscarElementoQuimico('B'));
console.log(buscarElementoQuimico('HE'));
console.log(buscarElementoQuimico('LI'));

// Verificar Propriedades
let miCuaderno = {
  color: 'verde',
  categoria: 3,
  precio: 4.56
}
console.log(miCuaderno.hasOwnProperty('color'));
console.log(miCuaderno.hasOwnProperty('idioma'));

function verificarPropriedad(obj, propriedad) {
  if(obj.hasOwnProperty(propriedad)) {
    return 'Propriedad: ' + obj[propriedad];
  }
  return 'El objeto no tiene esta propriedad' + propriedad;
}
console.log(verificarPropriedad(miCuaderno, 'color'))
console.log(verificarPropriedad(miCuaderno, 'origen'))

// Objetos Complejos
let ordenesPizza = [
  {
    tipo: 'margarita',
    tamaño: 'individual',
    toppings: ['extra queso', 'champiñones', 'piña'],
    'para llevar': true
  },
  {
    tipo: 'cuatro quesos',
    tamaño: 'familiar',
    precio: 18.34,
    toppings: ['extra queso', 'pimenton'],
    'para llevar': false
  },
  {
    tipo: 'napolitana',
    tamaño: 'individual',
    precio: 6.78,
    toppings: [],
    'para llevar': true
  }
];
console.log(ordenesPizza[0])
console.log(ordenesPizza[0].tipo)
console.log(ordenesPizza[0]['tipo'])
console.log(ordenesPizza[0].toppings)
console.log(ordenesPizza[0].toppings[0])
console.log(ordenesPizza[1])

// Objetos Anidados
let miReceta = {
  descripcion: 'mi postre favorito',
  costo: 15.6,
  ingredientes: 
  { masa: {
    harina: '100 grs',
    sal: '1 cucharita',
    agua: '1 taza'
  },
  cobertura: {
    azucar: '120 grs',
    chocolate: '4 cucharas',
    mantequilla: '200 grs '
  }}
}
console.log(miReceta)
console.log(miReceta['ingredientes']['masa'])
console.log(miReceta['ingredientes']['cobertura'])
console.log(miReceta['ingredientes']['cobertura']['azucar'])
console.log(miReceta['ingredientes']['cobertura'].azucar)
console.log(miReceta.ingredientes.masa.harina)


// Arreglos Anidados
let misPlantas = [
  {
    tipo:'flores',
    lista: ['rosas', 'tulipanes', 'dientes de leon']
  },
  {
    tipo: 'arboles',
    lista: ['abeto', 'pino', 'abedul']
  }
]
let primeraFlor = misPlantas[0].lista[0]
console.log(primeraFlor)
let segundoArbol = misPlantas[1].lista[1 ]
console.log(segundoArbol)

/* 
Tenemos un objeto que representa parte de una coleccion
de albunes musicales.

Cada albun tiene un numero de identificacion unico  (id)
asociado a otras propriedades.

No todos los albunes tienen la informacion completa.
*/

let coleccionDeDiscos = {
  7853: {
    tituloDelAlbun: 'Bee Gees Greatest',
    artistas: 'Bee Gees',
    canciones: ['Stayin Alive']
  },
  5439: {
    tituloDelAlbun: 'ABBA Goldn'
  }
}

/*
Define una funcion actualizarDiscos que tome los siguientes parametros:
- discos (el objeto que representa la coleccion de discos) .
- id.
- propriedad ('artistas' o 'canciones').
- valor.

Tu meta es completar la funcion omplementando las siguientes reglas
para modificar el objeto pasadoa a la funcion:

- Si 'valor' es una cadena vacia, eliminar la propriedad del albun correspondiente.

- Si 'propriedad es igual a la cadena de caracteres 'canciones' pero
el albun no tiene una propriedad llamada 'canciones, crea un arreglo
vacio y agrega 'valor' a ese arreglo.

- Si 'propriedad' es igual a la cadena de caracteres 'canciones' y 
'valor' no es una cadena vacia, agrega 'valor' al final del arreglo
de canciones del albun correspondiente.

- Si 'valor' no es una cadea vacia y 'propriedad' no es igual a
'canciones', asigna el valor del parametro 'valor' a la prorpiedad.
Si la propriedad no existe, debes crearla y asignar este valor.
*/

function actualizaDiscos(discos, id, propriedad, valor) {
  if (valor === ""){
    delete discos[id][propriedad];
    return 'Propriedad vacia: ' + propriedad + ' => eliminada';
  }
  else if (propriedad === 'canciones'/* && discos.id.hasOwnProperty('canciones')*/) {
    discos[id][propriedad] = discos[id][propriedad] || []; // si tiene la propriedad, el asigna, sino crea un nuevo arreglo vacio
    discos[id][propriedad].push(valor);
  }
  else {
    discos[id][propriedad] = valor;
  }
}
console.log(coleccionDeDiscos[7853].tituloDelAlbun)
actualizaDiscos(coleccionDeDiscos, 7853, 'titutuloDelAlbun', "");
console.log(coleccionDeDiscos[7853].tituloDelAlbun)

console.log(coleccionDeDiscos[5439].canciones)
actualizaDiscos(coleccionDeDiscos, 5439, 'canciones', 'Mamma mia')
console.log(coleccionDeDiscos[5439]['canciones'])
actualizaDiscos(coleccionDeDiscos, 5439, 'artistas', 'ABBA');
console.log(coleccionDeDiscos[5439].artistas)