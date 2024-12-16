<?php
/**
 * Nettoyage des ressources après l'exécution des scripts PHP.
 * Ce fichier permet de fermer la connexion à la base de données.
 */

//Fermeture de la connexion à la base de données si elle existe
if (isset($mysqli)) {
    $mysqli->close(); // Fermeture de la connexion à la base de données
}
?>
