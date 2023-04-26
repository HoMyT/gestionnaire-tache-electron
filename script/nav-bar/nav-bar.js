// Création des éléments HTML
const nav = document.createElement('nav');
const div1 = document.createElement('div');
const a = document.createElement('a');
const button = document.createElement('button');
const span = document.createElement('span');
const div2 = document.createElement('div');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const a1 = document.createElement('a');
const li2 = document.createElement('li');
const a2 = document.createElement('a');
const li3 = document.createElement('li');
const a3 = document.createElement('a');
const spanSr = document.createElement('span');

// Ajout des classes et des attributs
nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
a.className = 'navbar-brand';
a.href = '#';
a.textContent = 'Tableau de bord';
button.className = 'navbar-toggler';
button.type = 'button';
button.setAttribute('data-toggle', 'collapse');
button.setAttribute('data-target', '#navbarNav');
button.setAttribute('aria-controls', 'navbarNav');
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', 'Toggle navigation');
span.className = 'navbar-toggler-icon';
div2.className = 'collapse navbar-collapse';
div2.id = 'navbarNav';
ul.className = 'navbar-nav ml-auto';
li1.className = 'nav-item active';
a1.className = 'nav-link';
a1.href = '../../page/task/task.html';
a1.textContent = 'Accueil';
spanSr.className = 'sr-only';
spanSr.textContent = '(current)';
li2.className = 'nav-item';
a2.className = 'nav-link';
a2.href = '../../page/account/account.html';
a2.textContent = 'Paramètres';
li3.className = 'nav-item';
a3.className = 'nav-link';
a3.href = '../../page/inscription/inscription.html';
a3.textContent = 'Déconnexion';

// Ajout des éléments au DOM
button.appendChild(span);
a.appendChild(button);
li1.appendChild(a1);
li1.appendChild(spanSr);
li2.appendChild(a2);
li3.appendChild(a3);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
div2.appendChild(ul);
nav.appendChild(a);
nav.appendChild(div1);
nav.appendChild(div2);

// Ajout de la navbar au document
document.body.appendChild(nav);
