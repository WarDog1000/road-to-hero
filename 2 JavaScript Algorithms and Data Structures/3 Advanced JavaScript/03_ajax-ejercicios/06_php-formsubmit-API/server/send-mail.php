<?php

// si desde se envia una solicitud POST
  if(isset($_POST)) {
    // MANEJO DE ERRORES
    error_reporting(0);


    // guarda en variables los datos enviados
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];

    // $domain = $_SERVER['HTTP_HOST']; // obtiene el dominio del sitio de donde proviene la solicitud
    $domain = $_POST['domain']; // por ej. dominio del sitio de donde proviene la solicitud
    $to = "jhonatansouzameza100@gmail.com"; // correo donde se enviaran estos datos
    $tosubject = "Contacto desde el formulario del sitio $domain"; // asunto del correo enviado el formulario del sitio $domain: $subject  
    $message = "
    <p>Datos enviados desde el formulario del sitio <b>$domain<b></p>
    <ul>
      <li>Nombre: $name</li>
      <li>Email: $email</li>
      <li>Asunto: $subject</li>
      <li>Comentarios: $comments</li>
    </ul>
    "; // cuerpo del mensaje en formato html
    $headers = "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=UTF-8\r\n".
    "From: Envio automatico No responder <no-reply@$domain>\r\n"; // cabeceras del mensaje;
    $send_mail = mail($to, $tosubject, $message, $headers);

    if($send_mail) {
      $res = [
        "err" => false,
        "message" => "El mensaje ha sido enviado con exito"
      ];
    } else {
      $res = [
        "err" => true,
        "message" => "El mensaje no pudo ser enviado"
      ];
    }

    // control de acceso al servidor para politica de CORdesde cualquier origen
    header("Access_Control-Allow-Origin: *");
    header("Content-Type: application/json");
    echo json_encode($res);
    exit;
  }

?>