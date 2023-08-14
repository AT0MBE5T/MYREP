<?php

if (isset($_GET['oldimg']) AND isset($_GET['oldnaming']) AND isset($_GET['olddesc']) AND isset($_GET['oldprice'])AND isset($_GET['newimg']) AND isset($_GET['newnaming']) AND isset($_GET['newdesc']) AND isset($_GET['newprice'])) {
    $oldimg = $_GET['oldimg'];
    $oldnaming = $_GET['oldnaming'];
    $olddesc = $_GET['olddesc'];
    $oldprice = $_GET['oldprice'];

    $newimg = $_GET['newimg'];
    $newnaming = $_GET['newnaming'];
    $newdesc = $_GET['newdesc'];
    $newprice = $_GET['newprice'];
    $db = new PDO("mysql:host=localhost; dbname=dropShipping", "root", "");
    $db->query("UPDATE `dropshipping`.`goods` SET `img`='$newimg', `name`='$newnaming', `description`='$newdesc',`price` = '$newprice' WHERE `goods`.`img` ='$oldimg' AND `goods`.`name` ='$oldnaming' AND `goods`.`description`='$olddesc' AND `goods`.`price`='$oldprice';");
}

?>