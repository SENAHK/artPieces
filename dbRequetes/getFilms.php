<?php

require './connexion.php';
//echo "<meta charset='UTF-8'>";
$sql = "SELECT * from films";
$requete = getConnexion()->prepare($sql);
$requete->execute();
$resultat = $requete->fetchAll(PDO::FETCH_ASSOC);
print_r($resultat);
echo json_encode($resultat);
