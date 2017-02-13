<meta http-equiv='refresh' content='1; url=http://spldead.github.io'>
<meta charset="UTF-8"/>
<?php
if (isset($_POST['name'])) {
    $name = $_POST['name'];
    if ($name == '') {
        unset($name);
    }
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    if ($email == '') {
        unset($email);
    }
}
if (isset($_POST['message'])) {
    $message = $_POST['message'];
    if ($message == '') {
        unset($message);
    }
}

if (isset($name) && isset($email) && isset($message)) {

    $address = "spldead@gmail.com";
    $mes = "Имя: $name \nE-mail: $email \nТекст: $message";
    $send = mail($address, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
    if ($send == 'true') {
        echo "Сообщение отправлено";
    } else {
        echo "Ой, что-то пошло не так";
    }

} else {
    echo "Заполните все поля";
}
?>