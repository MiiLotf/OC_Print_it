const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments DOM nécessaires
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

// Sélection des flèches depuis le DOM
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajout des dots pour la navigation
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('dot_selected');
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Fonction de mise à jour de l'image et du texte
function updateSlide(index) {
    const slide = slides[index];
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    bannerText.innerHTML = slide.tagLine;

    // Mise à jour des dots
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[currentIndex].classList.add('dot_selected');
}

// Écouteurs pour les flèches
leftArrow.addEventListener('click', () => {
    console.log('Flèche gauche cliquée');
    if (currentIndex === 0) {
        currentIndex = slides.length - 1; // Passer à la dernière image
    } else {
        currentIndex -= 1; // Image précédente
    }
    updateSlide(currentIndex);
});

rightArrow.addEventListener('click', () => {
    console.log('Flèche droite cliquée');
    if (currentIndex === slides.length - 1) {
        currentIndex = 0; // Revenir à la première image
    } else {
        currentIndex += 1; // Image suivante
    }
    updateSlide(currentIndex);
});

// Auto-play toutes les 5 secondes
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
}, 5000);

// Écouteurs pour les dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(index);
    });
});

// Initialisation de la première slide
updateSlide(0);