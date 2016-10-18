<?php

require './connexion.php';
try {
    $sql = "SELECT * from paintings";
    $requete = getConnexion()->prepare($sql);
    $requete->execute();
    $resultat = $requete->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultat);
} catch (Exception $ex) {
    echo $ex->getMessage();
}
