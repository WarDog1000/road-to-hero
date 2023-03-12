/* **********     Curso JavaScript: 45. Asincronía y el Event Loop - #jonmircha     ********** */

/*  Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

     Procesamiento Single thread y Multi thread.
     Operaciones de CPU y Operaciones de I / O.
     Operaciones Concurrentes y Paralelas.
     Operaciones Bloqueantes y No Bloqueantes.
     Operaciones Síncronas y Asíncronas.

     Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).
     */

// Código Síncrono Bloquenate
(() => {
  console.log("Código Síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

console.log("********************");

// Código Asíncrono No Bloquenate
(() => {
  console.log("Código Asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
