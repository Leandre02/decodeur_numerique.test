<?php
/* Fichier d'implementation d'un Fact Checking
 * Ce fichier fera la recherche dans une base de donnée de la source (nom du media ou url) pour voir si il se situe dans la liste des medias en qui ont peut avoir confiance
 * Si la source est dans la liste, on retourne un booléen true, sinon on retourne false
 * Si la source n'est pas dans la liste, on retourne un message s'affiche et une recommandation est donnée
 * Possibilité de voir la liste complete des sites en qui on peut avoir confiance
 */
?>

<?php
require 'include/configuration.inc';
require_once 'include/ma-bibliotheque.php';
?>

<?php
$message = "";
$messageClass = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['source'])) {
    $source = trim($_POST['source']);
    if (verifierSource($source, $mysqli)) {
        $message = "La source <b>" . htmlspecialchars($source) . "</b> est fiable.";
        $messageClass = "success";
    } else {
        $message = "La source <b>" . htmlspecialchars($source) . "</b> n'est pas dans notre liste de confiance. Nous vous recommandons de consulter des médias reconnus.";
        $messageClass = "error";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Vérification de Fiabilité des Sources</title>
    <script>
        function masquerListe() {
            var mediaList = document.getElementById('media-list');
            if (mediaList.style.display === 'none') {
                mediaList.style.display = 'block';
            } else {
                mediaList.style.display = 'none';
            }
        }
    </script>
</head>
<body>
    <div class="fact-check-container">
        <h1>Vérification de Fiabilité des Sources</h1>
        <form method="post" action="">
            <input type="text" name="source" placeholder="Entrez le nom ou l'URL de la source" required>
            <button type="submit">Vérifier</button>
        </form>
        <?php if ($message): ?>
            <p class="message <?php echo $messageClass; ?>"><?php echo $message; ?></p>
        <?php endif; ?>

        <!-- Bouton/titre cliquable pour voir la liste des médias -->
        <h2 onclick="masquerListe()" style="cursor:pointer;">Voir la liste des médias de confiance</h2>

        <!-- Conteneur masqué pour la liste des médias -->
        <div id="media-list">
            <?php afficherListe($mysqli); ?>
        </div>
    </div>
</body>
</html>

