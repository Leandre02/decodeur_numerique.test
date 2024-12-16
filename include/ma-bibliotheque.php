<?php
require_once 'configuration.inc';

/**
 * Affiche une information de débogage seulement lorsque DEVEL est à true.
 * @author Léandre Kanmegne <2201877@carrefour.cegepvicto.ca>
 *
 * Utilisation : echo_debug($mysqli->error);
 * Suppositions critiques : pour un meilleur affichage, définir la classe debug dans la feuille de style.
 * @param String $message Information à afficher. Affichera "débogage" si ne reçoit aucun paramètre.
 */
function echo_debug($message = 'débogage') {
    if (defined('DEVEL')) {
        echo '<div class="debug">';

        if (is_array($message) || is_object($message)) {
            print_r($message);
        } else {
            echo $message;
        }

        echo '</div>';
    }
}

// Fonction pour vérifier une source
function verifierSource($source, $mysqli) {
    $count = 0;
    $requete = "SELECT COUNT(*) FROM medias_confiance WHERE nom_media = ? OR url_media = ?";
    $stmt = $mysqli->prepare($requete);
    $stmt->bind_param("ss", $source, $source);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->close();
    return $count > 0;
}

// Liste des médias fiables
function afficherListe($mysqli) {
    $requete = "SELECT nom_media, url_media FROM medias_confiance";
    $result = $mysqli->query($requete);
    echo "<ul>";
    while ($media = $result->fetch_assoc()) {
        echo "<li>" . htmlspecialchars($media['nom_media']) . " - " . htmlspecialchars($media['url_media']) . "</li>";
    }
    echo "</ul>";
}