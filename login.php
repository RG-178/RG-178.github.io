<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Hier solltest du die Anmeldeinformationen gegen die Datenbank überprüfen.
    // Das folgende ist nur ein einfaches Beispiel und nicht sicher.

    if ($username === "RG_178" && $password === "U3NbKJTC:X9fDjr") {
        // Anmeldung erfolgreich
        $_SESSION["logged_in"] = true;
        header("Location: /account");
        exit;
    } else {
        // Anmeldung fehlgeschlagen
        header("Location: /login.html"); // Weiterleitung zur Anmeldeseite
        exit;
    }
}
?>
