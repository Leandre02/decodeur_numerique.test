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

  // Fin du code emprunté

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

    // Affiche les résultats
    form.style.display = "none"; // Masque le formulaire
    resultsSection.style.display = "block"; // Affiche la section des résultats
    resultsSummary.textContent = `Merci d'avoir complété le quiz. Votre score est de ${totalPoints}%. Votre utilisation des médias est ${totalPoints > 50 ? 'très consciente' : 'à améliorer'}.`;

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
