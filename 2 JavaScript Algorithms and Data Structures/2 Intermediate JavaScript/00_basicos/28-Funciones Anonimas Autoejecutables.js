/* **********     Curso JavaScript: 32. Funciones Anónimas Autoejecutables - #jonmircha     ********** */
// Función Anónima Autoejecutables
(function () {
  console.log("Mi primer IIFE");
})();

(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log");
})(document, window, console);

//Formas de escribir las funciones Anónimas Autoejecutables
//Clásica
(function () {
  console.log("versión Clásica");
})();

//La Crockford (JavaScript The Good Parts)
(function () {
  console.log("versión Crockford");
})();

//Unaria
+(function () {
  console.log("versión Unaria");
})();

//Facebook
!(function () {
  console.log("versión Facebook");
})();
