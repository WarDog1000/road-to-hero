/* **********     Curso JavaScript: 59. JSON - #jonmircha     ********** */
/* https://www.json.org/json-es.html */
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON */
/* https://eloquentjavascript.net/ */
const json = {
  cadena: "Jon",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "programar", "jugar"],
  objeto: {
    twiter: "@jonsalchichon",
    email: "jonsalchichon@gmail.com",
  },
  nulo: null,
};

// Pasar cadenas de texto a valores validos
console.log(json);
console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1, 2, 3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
// console.log(JSON.parse("Hola Mundo")); // valor no valido
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined")); // valor no valido

// Convertir valores validos de jscript a texto u Objects {} a formato .JSON
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));
console.log(JSON.stringify(json));

console.log(
  JSON.parse(
    '{ "cadena": "Jon",  "numero": 35,  "booleano": true,  "arreglo": ["correr", "programar", "cocinar"],  "objeto": {    "twitter": "@jonmircha",    "email": "jonmircha@gmail.com"  },  "nulo": null}'
  )
);
