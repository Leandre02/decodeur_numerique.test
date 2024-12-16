<?php
/* Configuration de mon site web LeDecodeur
* Ce fichier contient les variables de configuration de mon site web et l'acces a la base de donnees
* 
*@package LeDecodeur
*@version 1.0
*@subpackage Configuration
*@category Configuration et acces a la base de donnees
*@since 2024-11-29
*@author Léandre Kanmegne <2201877@carrefour.cegepvicto.ca>
*/


// Configuration et connexion à la base de données
@$mysqli = new mysqli("127.0.0.1", "ilwrif27_academyadmin", "wK517&UEJ2#x7%ncVMZc", "ilwrif27_academy");
//@$mysqli = new mysqli("127.0.0.1", "root", "mysql", "factchecking_db");



// Vérification de la connexion
if ($mysqli->connect_errno) {
    die("Échec de la connexion à la base de données : " . $mysqli->connect_error);
}

// Configuration de l'encodage des caractères
$mysqli->set_charset("utf8");

//Variable de debug, false lorsque le site est déployé
define('DEVEL', false);

//Variable pour déterminer si le site est hébergé localement ou non
define('HEBERGEMENT_LOCAL', false);
?>
<!DOCTYPE html>
<html lang="fr-CA">
<head>
    <!-- Liaison du fichier CSS personnalisé -->
    <link href="css/factchecking.css" rel="stylesheet">
</head>
<body>
    <!-- Contenu de la page -->
</body>
</html>