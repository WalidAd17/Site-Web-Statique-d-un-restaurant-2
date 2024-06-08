/* Réalisé par ANNAD Walid - WM For Web Solution */
/*===============================================*/

// Ce fichier javascript est lié aux 3 pages html

// ce code est pour rendre le barre de navigation (navbar) fixée au dessus de chaque page lors du scroll en bas : 
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});