// Curso JavaScript: 32. Funciones Anónimas Autoejecutables
// IIFE (Immediately Invoked Function Expression)
//alert('Hola') // funcion declarada

// funcion anonima auto ejecutable
(function(){})();

(function(){
   console.log('Mi primer IIFE') 
})();

(function(){
    console.log('Mi segunda IIFE') 
 })();

 (function(d,w,c){
    console.log('Mi tercer IIFE');
    console.log(d);
    console.log(w);
    console.log(c);
 })(document, window, console);

//  Formas de escribir funciones anonimas autoejectutables
// clasica
(function(){ console.log('version clasica'); })();

// La Crockford (JavaScript the Good Parts)
(function(){ console.log('version Crockford'); }());

// unaria
+function(){ console.log('version unaria'); }();

// facebook
!function(){ console.log('version facebook'); }();

console.clear();