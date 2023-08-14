<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['email'];
$login = $_POST['login'];
$pass = $_POST['pass'];
$is = false;
$code = mt_rand();

$mail->isSMTP();
$mail->Host='smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = '3wellshop3@gmail.com'; //Откуда
$mail->Password = 'ikodmtopjmqskzcr';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('3wellshop3@gmail.com'); //Откуда
$mail->addAddress('alex.best.qwe@mail.ru');
$mail->isHTML(true);
$mail->Subject = 'Код авторизации';
$mail->Body = '' + 'Ваш код авторизации: ' .$code;
$mail->AltBody = '';
if(!$mail->send()){
    echo 'Error';
}
else $is=true;

?>



<html>  
    <head> 
    </head>
    <body> 
        <div hidden class="sendMail" data-regis="<?=$is;?>" data-regcode="<?=$code;?>" data-regmail="<?=$email;?>" data-regname="<?=$login;?>" data-regpass="<?=$pass;?>"></div>
        <script src="js\signin.js"></script>
    </body> 
</html>  