function validerConnexion() {
    var identifiant = document.getElementById("identifiant").value;
    var motDePasse = document.getElementById("mdp").value;

    if ((identifiant === "bammite" && motDePasse === "Password1") ||
        (identifiant === "bvmbv_abd" && motDePasse === "Password2")) {
        return true; // Autoriser la soumission du formulaire
    } else {
        alert("Identifiant ou mot de passe incorrect. Veuillez réessayer.");
        return false; // Empêcher la soumission du formulaire
    }
}