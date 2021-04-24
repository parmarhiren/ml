<?php

if (empty($_POST)) {
    echo "Only Post request is allowed";
    exit();    
}
$name = !empty($_POST["txtName"]) ? $_POST["txtName"] : null;  
$contact_email = !empty($_POST["txtEmail"]) ? $_POST["txtEmail"] : null;
$contact_number = !empty($_POST["txtPhone"]) ? $_POST["txtPhone"] : null;
$contact_message = !empty($_POST["txtMsg"]) ? $_POST["txtMsg"] : null;

$subject = "MatchBox Pictures Enquiry -".$name;
$myemail  = "raju@mantrasds.com";
    // $myemail  = "hsparmar44@gmail.com";
    /*ini_set('SMTP','smptout.secureserver.net');
    ini_set('smtp_port',465);*/
    /* Let's prepare the message for the e-mail */
    $message = "
    Mantraa Luminocity Enquiry
    Name: $name
    Email: $contact_email
    Phone Number: $contact_number
    Message : $contact_message

    ---
    ";
$headers =
		'MIME-Version: 1.0' . "\r\n".
'From: raju@mantrasds.com' . "\r\n" .
    'Reply-To: raju@mantrasds.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$success= mail($myemail, $subject, $message);
if (!$success) {
    $errorMessage = error_get_last()['message'];
}
/* Redirect visitor to the thank you page */
header('Location: contact.html');
exit();
