// Gestion des boutons pour afficher/cacher les réponses
const buttons = document.querySelectorAll('.questions button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const response = button.parentElement.querySelector('.reponses');
        response.classList.toggle('rep-hidden');
    });
});

// Sélectionnez le formulaire et les éléments du formulaire
const form = document.querySelector('.other-question');
const newQuestionInput = document.getElementById('new-question');
const newResponseInput = document.getElementById('new-response');
const submitButton = document.getElementById('submit-button');
const bodyFAQ = document.querySelector('.body-faq');

let newQuestionCounter = 6; // Compteur pour les nouvelles questions

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const questionText = newQuestionInput.value.trim();
    const responseText = newResponseInput.value.trim();

    if (questionText && responseText) {
        newQuestionCounter++;
        const newQuestion = document.createElement('div');
        newQuestion.classList.add('questions');
        const newButton = document.createElement('button');
        newButton.textContent = `Q${newQuestionCounter} : ${questionText}`;
        const newResponse = document.createElement('div');
        newResponse.classList.add('reponses', 'rep-hidden');
        const responseParagraph = document.createElement('p');
        responseParagraph.textContent = responseText;
        
        newResponse.appendChild(responseParagraph);
        newQuestion.appendChild(newButton);
        newQuestion.appendChild(newResponse);
        bodyFAQ.appendChild(newQuestion);

        // Réinitialisez les champs
        newQuestionInput.value = '';
        newResponseInput.value = '';
        
        // Ajouter un gestionnaire d'événement pour afficher/cacher les réponses des nouvelles questions
        newButton.addEventListener('click', function() {
            newResponse.classList.toggle('rep-hidden');
        });
    }
});

