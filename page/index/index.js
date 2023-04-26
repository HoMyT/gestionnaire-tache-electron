// Sélectionner les éléments HTML
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const connexionBtn = document.querySelector('#connection');

// Désactiver le bouton de connexion au départ
connexionBtn.disabled = true;

// Ajouter un écouteur d'événement sur les champs de saisie
emailInput.addEventListener('input', toggleConnexionBtn);
passwordInput.addEventListener('input', toggleConnexionBtn);

// Fonction pour activer/désactiver le bouton de connexion
function toggleConnexionBtn() {
    if (emailInput.value && passwordInput.value) {
    connexionBtn.disabled = false;
    } else {
    connexionBtn.disabled = true;
    }
}
