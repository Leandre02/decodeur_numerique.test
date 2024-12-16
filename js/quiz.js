/* Code JavaScript pour le quiz */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quiz-form");
  const progressBar = document.getElementById("progress-bar");
  const resultsSection = document.getElementById("results");
  const resultsSummary = document.getElementById("results-summary");
  const selects = document.querySelectorAll("select");

  // Options pour les réponses aux questions
  const options = [
    { value: "A", text: "Jamais", points: 1 },
    { value: "B", text: "Peu", points: 2 },
    { value: "C", text: "Parfois", points: 3 },
    { value: "D", text: "Souvent", points: 4 },
    { value: "E", text: "Presque toujours", points: 5 },
  ];

  // Pour remplir automatiquement les options dans tous les <select>
  selects.forEach(select => {
    options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text;
      select.appendChild(opt);
    });
  });

  /* Début du code emprunté 
  * Pour mettre à jour la barre de progression 
  * Pour afficher les résultats et les conseils
  * Source : ChatGPT by OpenAI
  */
  const updateProgress = () => {
    const totalFields = form.querySelectorAll("input, select").length;
    const filledFields = Array.from(form.querySelectorAll("input, select")).filter(
      field => field.value.trim() !== ""
    ).length;
    const progress = (filledFields / totalFields) * 100;
    progressBar.style.width = `${progress}%`;
  };

  form.addEventListener("input", updateProgress);


  // Validation et soumission du formulaire
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Vérifier si toutes les questions sont remplies
    const verificationInput = Array.from(form.querySelectorAll("input, select")).every(
      field => field.value.trim() !== ""
    );

    if (!verificationInput) {
      alert("Veuillez répondre à toutes les questions.");
      return;
    }

    let totalPoints = 0;
    selects.forEach(select => {
      const selectedOption = select.options[select.selectedIndex];
      const optionDetails = options.find(option => option.value === selectedOption.value);
      totalPoints += optionDetails.points;
    });

    // Affichage des résultats
    form.style.display = "none"; // Masquer le formulaire
    resultsSection.style.display = "block"; // Afficher la section des résultats

    let message = `<strong>Merci d'avoir complété le quiz.</strong><br><br>`; 
    message += `Votre score est de <strong>${totalPoints}%</strong>.<br><br>`;

    if (totalPoints > 50) {
      message += `<h3 style="margin-top:1em;">Analyse :</h3>`;
      message += `Vous avez déjà une utilisation plutôt consciente de vos médias. Vous faites preuve d’esprit critique et de discernement. Continuez à vérifier régulièrement vos sources, à varier vos canaux d’information et à vous informer sur les bonnes pratiques de sécurité en ligne.<br><br>`;
      message += `<h3>Pour aller plus loin :</h3>
      <ul>
        <li>Explorez des ressources sur la littératie numérique pour affiner davantage vos compétences.</li>
        <li>Diversifiez vos sources d'information afin de réduire les risques de biais cognitifs.</li>
        <li>Tenez-vous au courant des évolutions des politiques de confidentialité des plateformes que vous utilisez.</li>
      </ul>`;
    } else {
      message += `<h3 style="margin-top:1em;">Analyse :</h3>`;
      message += `Votre utilisation des médias en ligne pourrait être davantage optimisée. Il semble que vous soyez exposé(e) à des contenus sponsorisés sans toujours les évaluer, ou que vous n'appliquiez pas systématiquement de bonnes pratiques de protection de la vie privée (navigation privée, suppression de l'historique, gestion des cookies, etc.).<br><br>`;
      message += `<h3>Quelques conseils :</h3>
      <ul>
        <li><strong>Réfléchissez avant de cliquer :</strong> Limitez le temps passé sur certaines applis et sources de contenus non vérifiés.</li>
        <li><strong>Vérifiez la fiabilité :</strong> Avant de partager une information, prenez le temps de consulter sa source et de la comparer à d’autres médias reconnus.</li>
        <li><strong>Protégez vos données :</strong> Utilisez la navigation privée, supprimez régulièrement l’historique et les cookies, et soyez vigilant lorsque vous associez votre compte Google à des sites externes.</li>
      </ul>`;
    }

resultsSummary.innerHTML = message;

 // Fin du code emprunté


    // Masque le footer
    const footer = document.querySelector("footer");
    footer.style.display = "none";

    // Bouton d'impression
    const printButton = document.createElement("button");
    printButton.textContent = "Imprimer les résultats";
    printButton.className = "btn btn-primary mt-4"; // Classe pour le style (en option)
    printButton.style.marginTop = "20px"; // Ajout d'un espace en haut
    printButton.addEventListener("click", () => {
      window.print(); // Action d'impression
    });

    // Ajoute le bouton dans la section des résultats
    resultsSection.appendChild(printButton);

    // Affiche le bouton "Besoin d'Aide ?" si le score est inférieur à 50
    if (totalPoints < 50) {
      const helpButton = document.createElement("button");
      helpButton.textContent = "Besoin d'Aide ?";
      helpButton.className = "btn btn-danger mt-4"; // Classe pour le style (optionnel)
      helpButton.style.marginTop = "20px"; // Ajout d'un espace en haut
      helpButton.addEventListener("click", () => {
        window.location.href = "https://moijenseigne.ca/autoformation/citoyennete-numerique/"; // Redirection vers la page d'aide
      });

      // Ajoute le bouton dans la section des résultats
      resultsSection.appendChild(helpButton);
    }
  });
});
