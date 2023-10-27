document.addEventListener('DOMContentLoaded', function() {
    const switches = document.querySelectorAll('.switch input[type="checkbox"]');

    switches.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const container = this.parentElement; // Le conteneur du bouton switch
            const span = container.querySelector('.slider'); // Le span à modifier
            const td = container.parentElement.previousElementSibling; // La balise <td> frère précédent

            if (this.checked) {
                // Si la case est cochée, change la couleur du conteneur en rouge
                container.style.backgroundColor = '#ff0000'; // Rouge
                span.style.color = '#ff0000'; // Rouge
                td.querySelector('span').style.color = '#ff0000'; // Rouge
            } else {
                // Sinon, remet la couleur du conteneur en vert
                container.style.backgroundColor = '#00ff00'; // Vert
                span.style.backgroundColor = '#00ff00'; // Vert
                td.querySelector('span').style.color = '#0ed807'; // Vert
            }
        });
    });
});
