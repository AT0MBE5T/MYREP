<?php

    require_once('connect.php');
    $email = $_POST['email'];
    $login = $_POST['login'];
    $pass = $_POST['pass'];

    $query = "SELECT * FROM `accounts`";
    $res = $conn->query($query);
    $is = false;
    if($res->num_rows){
        while($row = $res->fetch_assoc()){
            if($login === $row['login']){
                $is = true;
            }
        }
    }
    if(!$is){
        $conn->query("INSERT INTO `accounts`(login, pass, email, isadmin) VALUES('$login', '$pass', '$email', '0')");
    }
?>
<html>  
    <head> 
    </head>
    <body> 
        <div hidden class="regPhp" data-regphp="<?=$is;?>" data-regphpname="<?=$login;?>"></div>
        <script src="js\signin.js"></script>
    </body> 
</html>  