
const buttonAnnule = document.querySelector('.button-annule')
const buttonsb = document.querySelector('.button-sb')
buttonsb.addEventListener('click', e => {
    document.querySelector('.sidebar').classList.remove('sidebar-pos')
    buttonsb.classList.add('button-hidden')
    buttonAnnule.classList.remove('button-hidden')

})

buttonAnnule.addEventListener('click', e => {
    document.querySelector('.sidebar').classList.add('sidebar-pos')
    buttonAnnule.classList.add('button-hidden')
    buttonsb.classList.remove('button-hidden')
})

var profil = document.querySelector(".profil");
var rect = profil.getBoundingClientRect();
console.log(rect);
console.log(window.scrollY);
document.addEventListener("click", function(event) {
    var modal = document.getElementById("modalProfil");
    var profilIcon = document.querySelector(".profil img");

    // Si le clic n'est pas à l'intérieur de la fenêtre modale ou sur l'icône de profil, cacher la fenêtre modale
    if (event.target !== modal && event.target !== profilIcon) {
        modal.style.display = "none";
    }
});



function toggleMenuProfil() {
    // Récupérer la fenêtre modale
    var modal = document.getElementById("modalProfil");

    // Vérifier l'état actuel de la fenêtre modale
    if (modal.style.display === "block") {
        // Si la fenêtre est affichée, la cacher
        modal.style.display = "none";
    } else {
         // Obtenir l'élément "profil" et la fenêtre modale
        var profil = document.querySelector(".profil");
        // Calculer la position de la fenêtre modale
        var rect = profil.getBoundingClientRect();
        var topPosition = rect.bottom + 10;
        var leftPosition = rect.left - 120 + window.scrollX;

        // Appliquer la position
        modal.style.top = topPosition + "px";
        modal.style.left = leftPosition + "px";

        // Afficher la fenêtre modale
        modal.style.display = "block";
    }
}


var date = new Date().toLocaleDateString()
var spans = document.querySelectorAll(".span").forEach(spans => {
    spans.innerHTML = `${date}  <br> 08:30`
});



// Fonction appelée lorsque l'utilisateur change la photo de profil
function changerPhotoProfil(event) {
    // Récupérer l'URL de l'image depuis le champ de fichier
    const nouvelleImageURL = URL.createObjectURL(event.target.files[0]);

    // Appliquer la nouvelle image à l'élément de l'image de profil
    document.getElementById('photo-profil').src = nouvelleImageURL;
}