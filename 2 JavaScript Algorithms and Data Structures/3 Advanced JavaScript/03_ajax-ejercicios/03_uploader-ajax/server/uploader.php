<?php

  // echo "Hola, respuesta desde el servidor";

  // devuelve toda la info del archivo
  // var_dump($_FILES);

  // valida si viene un archivo "file"
  if(isset($_FILES["file"])) {

    // guarda en name la propriedad ["name"] que viene de $_FILES["file"]
    $name = $_FILES["file"]["name"];
    $file = $_FILES["file"]["tmp_name"];
    $err = $_FILES["file"]["error"];
    $destination = "files/$name";

    // funcion para guardar un archivo subido, devuelve true o false
    $upload = move_uploaded_file($file, $destination);

    // si el archivo se subio crea una estructura para la respuesta
    if($upload) {
      $res = array(
        "err" => false,
        "status" => http_response_code(200),
        "statusText" => "Archivo $name subido con exito",
        "files" => $_FILES["file"]
      );
    } else {
      $res = array(
        "err" => true,
        "status" => http_response_code(400),
        "statusText" => "Archivo al subir el archivo $name",
        "files" => $_FILES["file"]
      );
    }

    // devuelve una respuesta convertida en formato json
    echo json_encode($res);
  }

?>