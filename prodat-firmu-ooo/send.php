<? 
$data = $_POST;

$to  = "ershow2@yandex.ru"; 

$subject = "Новая заявка"; 

$message = '<p>Новая заявка с сайта</p><p>Контакты<br>Имя: '.$data['name'].'<br>Телефон: '.$data['phone'].'<br>Почта: '.$data['email'].'</p><p>Ответы:<br>'.$data['message'].'</p>';

$headers  = "Content-type: text/html; charset=utf-8"; 

mail($to, $subject, $message, $headers);