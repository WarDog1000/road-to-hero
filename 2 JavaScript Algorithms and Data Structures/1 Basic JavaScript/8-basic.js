// Retornar Valores Boolenos
function esMenorQ(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// simplificado
function esMenorQSimplificado(a, b) {
  return a < b;
}
console.log(esMenorQ(2, 3));
console.log(esMenorQSimplificado(2, 3));

// Patron de Retorno Anticipado
function miFuncion() {
  console.log("Hola");
  return "Mundo";
  // console.log('Adios'); // esta linea nunca se va ejecutar por estar despues de un return
}

console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return "No se puede calcular la raiz cuadrada de numeros negativos";
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));

// Conteo de cartas
/*Descripcion:

En el juego de Blackjack el jugador puede sacarle
ventaja a la casa llevando un registro del numero relativo
de cartas altas y bajas que quedan en la baraja.

Esto se llama 'conteo de cartas'

Tener mas cartas altas en la baraja es una ventaja para el
jugador. Se le asigna un valor a cada carta de acuerdo a
la siguiente tabla.

- Cuando el conteo es positivo, el jugador debera apostar alto.
- Cuando el conteo es 0 o negativo, el jugador debera apostar bajo.

Cambio de conteo        Cartas
------------------------------------------------
+1                      2, 3, 4, 5,, 6
0                       7, 8 , 9
-1                      10, J, Q, K, A

Nuestra meta es definir una funcion para contar cartas

La funcion debe tomar un parametro carta que puede ser
un numero o una cadena de caracteres y luego aumentar
o reducir el valor de la variable global conteo
de acuerdo al valor de la carta (observ la tabla).

la funcion debe retornar una cadena de caracteres con el 
conteo actual y al cadena:
- 'Apostar' si el conteo es positivo.
- 'Esperar' si el conteo es cero o negativo.

El conteo actual y la condicion del jugador 
('Apostar' o 'Esperar') debem estra separados por un espacio.
 */

var conteo = 0;
function cuentaCartas(carta = 0) {
  var apostar = "Apostar";
  var esperar = "Esperar";

  switch (carta) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
      conteo++;
      break;
    case "10":
    case "J":
    case "Q":
    case "K":
    case "A":
      conteo--;
      break;
  }

  if (conteo > 0) {
    return conteo + " " + apostar;
  } else {
    return conteo + " " + esperar;
  }
}

cuentaCartas("1");
cuentaCartas("3");
cuentaCartas("J");
cuentaCartas("4");

console.log(cuentaCartas());
