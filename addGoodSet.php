<?php

    require_once("connect.php");

    $primg = $_POST['addImg'];
    $prname = $_POST['addName'];
    $prdesc = $_POST['addDesc'];
    $prprice = $_POST['addPrice'];

    $sqlQuery = "INSERT INTO `goods`(img, name, description, price) VALUES('$primg', '$prname', '$prdesc', '$prprice')";
    $conn->query($sqlQuery);

    header("Location: /index.php");

?>