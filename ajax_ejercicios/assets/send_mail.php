<?php

if (isset($_POST)) {
  error_reporting(0);

  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];


  $domain = $_SERVER["HTTP_HOST"];
  $to = "colocar_tu_email";
  $subject_mail = "Contacto desde el formulario del sitio $domain: $subject";
  $message = "
  <p>
  Contacto desde el formulario del sitio <b>$domain:</b>
  </p>
  <ul>
  <li>Nombre: <b>$name</b></li>
  <li>Email: <b>$email</b></li>
  <li>Asunto: $subject</li>
  <li>Comentarios: $comments</li>


  </ul>
  ";
  $headers = "MIME-Version: 1.0\r\n"."Content-Type/html; charset=utf-8\r\n". 
  "From: Envio Automatico No Responder <no-reply@$domain>";

  $send_mail = mail($to, $subject_mail, $message, $headers);

  if($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos han sidos enviados"
    ];
  } else {
     $res = [
      "err" => true,
      "message" => "Error al enviar tus datos. Intenta nuevamente"
    ];
  }

  // header("Access-Control-Allow-Origin: *"); recibir peticion desde cualquier origen
  // header("Access-Control-Allow-Origin: https://jonmircha.com"); recibi solo peticiones solo de este dominio
  header('Content-type: application/json');
  echo json_encode($res);
  exit;

}
