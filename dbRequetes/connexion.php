<?php

DEFINE('DB_HOST', "127.0.0.1");
DEFINE('DB_NAME', "artpieces");
DEFINE('DB_USER', "admin_artpieces");
DEFINE('DB_PASS', "Super");

/**
 * getConnexion lance une connexion vers la base de données
 * @staticvar null $dbc
 * @return \PDO
 */
function getConnexion() {
    static $dbc = null;
    try {
        if ($dbc === null) {
            $connectionString = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;
            $dbc = new PDO($connectionString, DB_USER, DB_PASS);
            $dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    } catch (PDOException $e) {
        die("Erreur; " . $e->getMessage());
    }
    return $dbc;
}
