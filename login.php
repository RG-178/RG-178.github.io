<?php
$allowedReferrer = 'https://rg-178.github.io'; // Die erlaubte Seite

if(isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER'] === $allowedReferrer) {
    // Die Referrer-Überprüfung war erfolgreich, die Seite anzeigen
    include('geheime_seite.html');
} else {
    // Nicht vom erlaubten Referrer aus aufgerufen, umleiten oder Fehlermeldung anzeigen
    header('Location: fehlerseite.html');
    exit;
}
?>
