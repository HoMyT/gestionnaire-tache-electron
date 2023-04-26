// Sélectionne le bouton qui déclenche la requête à l'API

const btn = document.querySelector('#connection');

// Sélectionne la barre de progression
const progressBar = document.querySelector('.progress-bar');

// Cache la barre de progression au démarrage
progressBar.style.width = '0%';
progressBar.style.display = 'none';

// Attache un événement click sur le bouton
btn.addEventListener('click', async () => {
  // Affiche la barre de progression
  progressBar.style.display = 'block';

  // Définit le temps de chargement maximal de l'API (en ms)
  const maxLoadTime = 5000;

  // Initialise le temps de chargement
  let loadTime = 0;

  // Lance une boucle pour remplir progressivement la barre de progression
  const fillProgressBar = setInterval(() => {
    // Vérifie si le temps de chargement est inférieur au temps de chargement maximal
    if (loadTime < maxLoadTime) {
      // Calcule le pourcentage de remplissage de la barre de progression
      const progressPercent = (loadTime / maxLoadTime) * 100;

      // Met à jour la largeur de la barre de progression
      progressBar.style.width = `${progressPercent}%`;

      // Incrémente le temps de chargement
      loadTime += 100;
    } else {
      // Arrête la boucle de remplissage de la barre de progression
      clearInterval(fillProgressBar);
    }
  }, 100);

  fetch("http://localhost:3001/v2/users/connexion", {
    method: 'POST',
        headers: {
        'Content-Type': 'application/json'
            },
        body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
    progressBar.style.width = `${100}%`;
    localStorage.setItem('token', data.token);
    alert(data.message);
    document.location.href = "./page/task/task.html";
    })
    .catch(error => {
    console.error('Erreur lors de la requête:', error);
    });
});
