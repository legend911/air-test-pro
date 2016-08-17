<?php
// Configure Email
$from = 'webmaster@airtestpro.com';
$sendTo = 'webmaster@airtestpro.com';
$subject = 'Business Validation form message';
$fields = array('name' => 'Name', 'email' => 'Email', 'comment' => 'Comment'); // array variable name => Text to appear in email
$okMessage = 'Validation form successfully submitted. Thank you for your input, I will get to work providing your solution now!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// Send Email

try
{
    $emailText = "You have new message from the Business Validation form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
?>