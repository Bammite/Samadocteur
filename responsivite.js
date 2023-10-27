function affichage_TableauDeBord() {
    var tableauDeBord = document.querySelector(".tableau_de_bord");

    if (tableauDeBord.style.display === "none") {
        tableauDeBord.style.display = "block";
    } else {
        tableauDeBord.style.display = "none";
    }
}