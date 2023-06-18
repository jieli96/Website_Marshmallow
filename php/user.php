<?php

// Pfad zur Textdatei
$file_path = "../usernames.txt";

// Wenn das Formular abgeschickt wurde
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Benutzername aus dem POST-Array erhalten
  $username = $_POST['username'];

  // Array mit Benutzernamen aus der Datei laden
  $usernames = file($file_path, FILE_IGNORE_NEW_LINES);

  // Benutzernamen überprüfen
  if (in_array($username, $usernames)) {
    // Wenn der Benutzername bereits vorhanden ist
    echo "false";
  } else {
    // Wenn der Benutzername nicht vorhanden ist, fügen Sie ihn zur Datei hinzu
    file_put_contents($file_path, $username . "\n", FILE_APPEND);
    echo "true";
  } 
  
}
?>
