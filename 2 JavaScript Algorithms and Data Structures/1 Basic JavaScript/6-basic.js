// Sentencias condicionales
if (true) {
  console.log("La codicio es verdadera");
}

var estacion = "verano";
if (estacion == "invierno") {
  console.log("Si me encata el invierno");
}
console.log("if simpempre se ejecuta mietras la codicion sea true");

// Clausula "else"
if (true) {
  // true or false
  console.log("la condicion es verdadera");
} else {
  console.log("la condicion es falsa");
}

var x = 1;
if (x < 2) {
  console.log("la condicion es verdadera");
} else {
  console.log("la condicion es falsa");
}

// Clausula "else if"
function clasicarValor(valor) {
  if (valor % 2 == 0) {
    return "divisible entre 2";
  } else if (valor % 3 == 0) {
    return "divisible entre 3";
  } else {
    return "no es divisible entre las opciones";
  }
}

console.log(clasicarValor(3))

// Condicionales: Orden logico
function clasificar(valor) {
  if (valor < 5) {
    return "menor que 5";
  } else if (valor < 10) {
    return "menor que 10";
  } else {
    return "valor mayor que 10";
  }
}

console.log(clasificar(3))

function interpreteIMC(imc) {
  if (imc < 18.5) {
    return "bajo peso";
  } else if (imc <= 24.9) {
    return "peso normal";
  } else if (imc <= 29.9) {
    return "sobrepeso";
  } else {
    return "obeso";
  }
}

console.log(interpreteIMC(20.5))

// Codigo de golf
/*
En el juego de golf cada oyo tiene un par que
representa el numero promedio de golpes
que se espera que haga un golfista para introducir
la pelota en el oyo.

Hay un nombre diferente dependiendo de que tan
por ensima o por debajo del par esten sus golpes.

Tu funcion tomara los argumentos par y golpes.

Retorna la cadena correcta segun esta tabla que muestra
los golpes de orden de mayor a menor prioridad:

Golpes				Retornar
---------------------------
1							'Hole-in-one!'
<= par - 2			'Eagle'
par - 1				'Birdie'
par						'Par'
par + 1				'Bogey'
par + 2				'Double Bogey'
>= par + 3		'Go Home!'

*/

function golf(par, golpes) {
  if (golpes == 1) {
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if(golpes >= par + 3) {
		return 'Go Home!';
	}
}

console.log(golf(4, 15))