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

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href);
console.log(document.querySelector('.link-dom').getAttribute('href'));

document.documentElement.lang = 'en';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang' , 'es-MX');
console.log(document.documentElement.lang);

// Guardando los selectores del DOM en variables (se antepone el signo $ para hecer referencia a los elementos del dom)
const $linkDOM = document.querySelector('.link-dom');
$linkDOM.setAttribute('target', '_blank');
console.log($linkDOM.hasAttribute('rel'));
$linkDOM.setAttribute('rel', 'noopener');
$linkDOM.setAttribute('href', 'https://gmail.com');

// Data Attributes
console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);

$linkDOM.setAttribute('data-description', 'Modelo de Objeto del Documento')
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = 'Hola Prrooo!'
console.log($linkDOM.dataset.description);


/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'));

// gregar estilos con slelectores del DOM
$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');
// gregar estilos con slelectores del DOM
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'));

// VAriables CSS - Custom Properties
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
  varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty('--dark-color', '#000');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
$body.style.setProperty('background-color', varDarkColor)

/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */

// className
// classList .constains, .add, .remove, .toggle. replace
const $card = document.querySelector('.card');
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));


// Añadir una clase desde el  DOM
$card.classList.add('rotate-45');
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));
console.log($card.className);

// Eliminar una clase delde el DOM
$card.classList.remove('rotate-45');
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));
console.log($card.className);

// Alterna entre los estados. Si el elemento ya tiene la clase especificada, se la quita, y si no la tiene, se la agrega.
$card.classList.toggle('rotate-45');
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));
console.log($card.className);


// Se utiliza para reemplazar una clase existente en un elemento HTML con una nueva clase.
$card.classList.replace('rotate-45', 'rotate-135');

// Añadir varias clases a la vez
$card.classList.add('opacity-80', 'sepia');
// Eliminar varias clases a la vez
$card.classList.remove('opacity-80', 'sepia');
// Alternar  varias clases a la vez
$card.classList.toggle('opacity-80', 'sepia');

/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */

const $whatIsDOM = document.getElementById('que-es');

let text = `
  <p>
    EL Modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>) es una API para
    documentos HTML y XML.
  </p>
  <p>
    Este provee una representacion estructural del documento, permitiendo modificar su contenido y
    persentacion visual mediante codigo JS.
  </p>
  <p>
    <mark> El DOM no es parte de la especificacion de javaScript, es una API para los anvegadores</mark>
  </p>
  `;

  // $whatIsDOM.innerText = text;
  $whatIsDOM.textContent = text;

  // Insertar codigo en html
  $whatIsDOM.innerHTML = text;
  
  // remplaza el elemento del DOM por el contenido
  $whatIsDOM.outerHTML = text;


/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */
console.log('====== DOM Traversing: Recorriendo el DOM ======');
const $cards = document.querySelector('.cards');
console.log($cards);

// Retorna una coleccion de los elementos hijos
console.log($cards.children);

// Retorna un elemento hijo en especifico
console.log($cards.children[2]);

// Retrona el primer nodo
console.log($cards.firstChild);

// Retrona el ultimo nodo
console.log($cards.lastChild);

// Retorna el primer elemento hijo
console.log($cards.firstElementChild);

// Retorna el ultimo elemento hijo
console.log($cards.lastElementChild);

// Retorna el elemento padre
console.log($cards.parentElement);

// Retorna el nodo padre
console.log($cards.parentNode);

// Retorna el primer elemento hermano
console.log($cards.previousElementSibling);

// Retorna el ultimo elemento hermano
console.log($cards.nextElementSibling);

// Busca el ancestro mas cercano
console.log($cards.closest('div'));
console.log($cards.children[3].closest('section'));

/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */

const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figcaptions = document.createElement('figcaption'),
    $textFig = document.createTextNode('Animals');

// Agregar nodos hijo
$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaptions);
$figcaptions.appendChild($textFig);

//Agregar propriedades a los elementos
$img.setAttribute('src','https://placeimg.com/200/200/animals');
$img.setAttribute('alt','Animals');

// Agregar clase a los elementos
$figure.classList.add('card');


// ====== Agregando otra tarjeta ======
const $figure2 = document.createElement('figure');
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People" />
<figcaption>People</figcaption>
`;
$figure2.classList.add('card');
// Añade el nodo de figure2 al elemento .card
$cards.appendChild($figure2);

// -----------
const estaciones = ['Primavera', 'Veramo', 'Otoño', 'Invierno'],
      $ul = document.createElement('ul');

document.write(`<h3>Estaciones del Año</h3>`);
document.body.appendChild($ul);

estaciones.forEach(el => {
  const $li = document.createElement('li');
  $li.textContent = el;
  $ul.appendChild($li);
})

// -----------
const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'],
$ul2 = document.createElement('ul');

document.write(`<h3>Continentes del Mundo</h3>`);
document.body.appendChild($ul2);
$ul2.innerHTML = ``;
continentes.forEach( el => {
  $ul2.innerHTML += `<li>${el}</li>`
})

// -----------


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
