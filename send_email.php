<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace
    $fullname = trim($_POST["fullname"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // Set the recipient email address
    $to = "elbakkourisalmaa@gmail.com";

    // Set the email subject
    $subject = "New message from $fullname";

    // Build the email content
    $email_content = "Full Name: $fullname\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $headers = "From: $fullname <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "<p>Your message has been sent successfully!</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
} else {
    // Not a POST request, redirect to the contact page
    header("Location: contact.html");
}
?>
