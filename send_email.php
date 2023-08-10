<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "wahyuma123@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "Pesan dari " . $name;
    $headers = "From: " . $email;
    
    mail($to, $subject, $message, $headers);
    
    // Beri respons kepada pengguna
    echo "Pesan telah terkirim. Terima kasih!";
}
?>
