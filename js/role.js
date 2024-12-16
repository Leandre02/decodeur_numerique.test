/* Code javascript pour la page des roles */
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('credit-text').style.display = 'none'; // Cache le texte après 5 secondes
        document.querySelector('.role-container').style.display = 'flex'; // Affiche les rôles
    }, 5000);  // Délai de 5 secondes
});
