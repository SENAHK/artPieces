<?php

require_once './connexion.php';

try {
    $sql = "SELECT artisteAlbum, nomAlbum, anneeAlbum, descriptionAlbum from albums";
    $requete = getConnexion()->prepare($sql);
    $requete->execute();
    echo json_encode($requete->fetchAll(PDO::FETCH_ASSOC));
} catch (Exception $ex) {
    echo json_encode($ex->getMessage());
}
?>