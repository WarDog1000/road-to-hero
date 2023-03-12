/* **********     Curso JavaScript: 16. Manejo de Errores - #jonmircha     ********** */
try {
  console.log("En el Try se agrega el código a evaluar");
  noExiste;
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch, captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log(
    "El bloque finally se ejecutará siempre al final de unbloque try-catch"
  );
}

try {
  let numero = "y";

  if (isNaN(numero)) {
    throw new Error("El caractér introducido no es un Número");
  }

  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}
