<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Introduccion a PHP</title>
</head>

<body>
  <p>Mensaje desde html</p>
  <?php

  echo "Mensaje desde php <br>";
  print "Mensaje desde php con print <br>";

  // Comentarios

  # Comentarios

  /* comentarios
  de varias lineas
  */

  // variables
  $number = 1; // numero
  $text = "Texto php"; // texto
  $boolean = false; // booleano
  $float = 1.2; // booleano
  $array = array("hello", "world", 1); // arreglo

  // variable global
  $global = "global";

  // variable local
  function varLocal() {
    $local = "local";
    echo $local . "<br>";
  }

  // funcion
  function valor() {
    // variable de autoguardado
    static $x = 1;
    $y = 1;
    // concatenar
    echo $x . "-" . $y . "<br>";
    $x++;
  }
  valor();
  valor();
  valor();

  // funcion que evalua el tipo de variable var_dump()
  var_dump($number);
  echo "<br>";
  var_dump($text);
  echo "<br>";
  var_dump($boolean);
  echo "<br>";
  var_dump($float);
  echo "<br>";
  var_dump($array);
  echo "<br>";

  // funciones para trabajar con cadenas
  $message = "Hello World";

  echo "Numero de caracteres ".strlen($message)."<br>"; // contar el numero de caracteres

  echo "Numero de palabras ".str_word_count($message)."<br>"; // contar numero de palabras

  echo "Palabra en reversa ".strrev($message)."<br>"; // mostrar string en reverssa

  echo "Ubicacion del texto ".strpos($message, "World")."<br>"; // mostrar posicion de un caracter o palabra

  echo str_replace("Hello", "Goobye", $message)."<br>"; // remplaza un string por otro

  // funciones para trabajar con numeros
  echo "Es un numero? ".var_dump(is_int($number))."<br>"; // valida si es un numero

  echo "Es un numero decimal? ".var_dump(is_float($number))."<br>"; // validar numero float
  
  echo "Es un numero decimal? ".var_dump(is_double($number))."<br>"; // validar numero double
  
  echo "Es un numero infinito? ".var_dump(is_infinite($number))."<br>"; // validar numero infinito
  
  echo "Es un numero finito? ".var_dump(is_finite($number))."<br>"; // validar numero finito


  ?>
</body>

</html>