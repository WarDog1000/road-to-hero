/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

console.log(window);
console.log(document);

let texto = 'Hola perro!';
const hablar = (texto) => {  speechSynthesis.speak(new SpeechSynthesisUtterance(texto)) }
// hablar(texto);

/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */

console.log('************ Elementos del Documento ************');
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write(`<br><hr></br>`)
document.write('<h3>Hola Mundo desde el DOM</h3>');


/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// Anteriores selectores
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));
// Anterior selector que se sigue usando
console.log(document.getElementById('menu'));

// Nuevos metodos de selecion de elementos
console.log(document.querySelector('#menu'));
console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelectorAll('#menu li'));
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('a').length);
document.querySelectorAll('a').forEach(el => console.log(el));

/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */
/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */
/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */
/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */
/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */
/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */
/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */
/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     ********** */
/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** */
/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** */
/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** */
/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
