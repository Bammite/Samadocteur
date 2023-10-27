// Fonction pour afficher ou masquer les détails en fonction du statut (accepté ou annulé)
function afficherDetails(statut) {
    const contenuAccepted = document.getElementById('contenu_affichage_details_accepted');
    const contenuCanceled = document.getElementById('contenu_affichage_details_canceled');
    const affichageDetails = document.getElementById('affichage_details');
  
    if (statut === 'accepte') {
      contenuAccepted.style.display = 'block';
      contenuCanceled.style.display = 'none';
    } else if (statut === 'annule') {
      contenuAccepted.style.display = 'none';
      contenuCanceled.style.display = 'block';
    }
  
    affichageDetails.style.display = 'block';
  }
  
  // Fonction pour masquer les détails
  function masquerDetails() {
    const contenuAccepted = document.getElementById('contenu_affichage_details_accepted');
    const contenuCanceled = document.getElementById('contenu_affichage_details_canceled');
    const affichageDetails = document.getElementById('affichage_details');
  
    contenuAccepted.style.display = 'none';
    contenuCanceled.style.display = 'none';
    affichageDetails.style.display = 'none';
  }
  
  // Ajout des gestionnaires d'événements aux icônes "i"
  const iconeAccepte = document.querySelector('img[title="afficher les détails"][onclick="afficherDetails(\'accepte\')"]');
  const iconeAnnule = document.querySelector('img[title="afficher les détails"][onclick="afficherDetails(\'annule\')]');
  
  iconeAccepte.addEventListener('click', function () {
    afficherDetails('accepte');
  });
  
  iconeAnnule.addEventListener('click', function () {
    afficherDetails('annule');
  });
  
  // Gestionnaire d'événement pour masquer les détails lors d'un clic en dehors de la boîte
  document.addEventListener('click', function (event) {
    const affichageDetails = document.getElementById('affichage_details');
    const contenuAccepted = document.getElementById('contenu_affichage_details_accepted');
    const contenuCanceled = document.getElementById('contenu_affichage_details_canceled');
  
    if (affichageDetails.style.display === 'block' &&
        event.target !== affichageDetails &&
        !affichageDetails.contains(event.target) &&
        event.target !== contenuAccepted &&
        !contenuAccepted.contains(event.target) &&
        event.target !== contenuCanceled &&
        !contenuCanceled.contains(event.target)) {
      masquerDetails();
    }
  });
  