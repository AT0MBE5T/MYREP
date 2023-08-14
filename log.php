<?php
    require_once('connect.php');

    $login = $_POST['login'];
    $pass = $_POST['pass'];
    $isWrong = false;

    $sqlGet = "SELECT * FROM `accounts` WHERE login='$login' AND pass='$pass'";
    $sqlAdmin = "SELECT * FROM `accounts` WHERE isAdmin = '1' AND login='$login'";
    $resultAdmin = $conn->query($sqlAdmin);
    $resultQuery = $conn->query($sqlGet);

    if($resultQuery->num_rows){
        while($row = $resultQuery->fetch_assoc()){
            $getLogin = $row['login'];
            $isWrong = true;
        }
    }
    if($resultAdmin->num_rows){
        while($row = $resultAdmin->fetch_assoc()){
            $getAdm = $row['isAdmin'];
            $isWrong = true;
        }
    }
?>

<html>  
    <head> 
    </head>
    <body> 
        <div hidden class="blockPhp" data-attr="<?=$getLogin;?>" data-attrerror="<?=$isWrong;?>" data-attradm="<?=$getAdm;?>"></div>
        <script src="js\login.js"></script>
    </body> 
</html>  