<?php

if (isset($_GET['img']) AND isset($_GET['naming']) AND isset($_GET['desc']) AND isset($_GET['price'])) {
    $img = $_GET['img'];
    $naming = $_GET['naming'];
    $desc = $_GET['desc'];
    $price = $_GET['price'];
    $db = new PDO("mysql:host=localhost; dbname=dropShipping", "root", "");
    $db->query("DELETE FROM `goods` WHERE img='$img' AND name='$naming' AND description='$desc' AND price='$price'");
    header("Location: index.php");
}

?>