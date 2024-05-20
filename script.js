// Fonctionnalité 1 :
// const footer = document.querySelector('footer');
// footer.addEventListener('click', () => {
//     console.log('clique');
// });


// Fonctionnalité 1-bis : 
let compteurClics = 0;

const footer = document.querySelector('footer');

footer.addEventListener('click', () => {
    compteurClics++;

    console.log('clic numéro ' + compteurClics);
});


// Fonctionnalité 2 :
// Sélectionner le bouton
const toggleButton = document.querySelector('.navbar-toggler');
const navbarHeader = document.getElementById('navbarHeader');

toggleButton.addEventListener('click', () => {
    // Utiliser toggle pour ajouter ou enlever la classe "collapse"
    navbarHeader.classList.toggle('collapse');
});


// Fonctionnalité 3 :
let editButton = document.querySelector('.btn-outline-secondary');
let cardText = document.querySelector('p.card-text');

editButton.addEventListener('click', () => {
    cardText.style.color = "red"

});


// Fonctionnalité 4 :
let card = document.querySelectorAll('.col-md-4')[1];
let editBtn = card.querySelector('.btn-outline-secondary');

editBtn.addEventListener('click', () => {
    if (card.style.color === 'green'){

        card.style.color = '' ;
        
    }else card.style.color = "green"
});


// Fonctionnalité 5 :
// var navBar = document.querySelector('.navbar')

// navBar.addEventListener('dblclick', () => {
//     var bootstrapCSS = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
//     if (bootstrapCSS) {
//         bootstrapCSS.parentNode.removeChild(bootstrapCSS);
//     } else {
//         var head = document.querySelector('head');
//         var newLink = document.createElement('link');
//         newLink.rel = 'stylesheet';
//         newLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
//         head.appendChild(newLink);
//     }
// });

let navBar = document.querySelector('.navbar')
let bootstrapCSS = document.getElementsByTagName('link')[0];

navBar.addEventListener('dblclick', () => {
    if (bootstrapCSS.disabled === false) {
        bootstrapCSS.disabled = true ;
    } else {
        bootstrapCSS.disabled = false;
    }
});


// Fonctionnalité 6 :
var viewButtons = document.querySelectorAll('.card .btn.btn-sm.btn-success');

viewButtons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        var card = button.closest('.card');

        var isReduced = card.classList.contains('reduced');

        if (!isReduced) {
            card.classList.add('reduced');
            var cardText = card.querySelector('.card-text');
            var cardImage = card.querySelector('.card-img-top');
            if (cardText) cardText.style.display = 'none';
            if (cardImage) cardImage.style.transform = 'scale(0.2)';
        } else {
            card.classList.remove('reduced');
            var cardText = card.querySelector('.card-text');
            var cardImage = card.querySelector('.card-img-top');
            if (cardText) cardText.style.display = '';
            if (cardImage) cardImage.style.transform = '';
        }
    });
});





