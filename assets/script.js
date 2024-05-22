document.addEventListener("DOMContentLoaded", function () {
    let bannerImg = document.querySelector(".banner-img");
    let bannerText = document.querySelector("#banner p");
    let dotsContainer = document.querySelector(".dots");

    // Tableau de données avec les images et les descriptions
    const slides = [
        {
            image: "./assets/images/slideshow/slide1.jpg",
            tagLine: "Impressions tous formats<span>en boutique et en ligne</span>"
        },
        {
            image: "./assets/images/slideshow/slide2.jpg",
            tagLine: "Tirages haute définition grand format<span>pour vos bureaux et events</span>"
        },
        {
            image: "./assets/images/slideshow/slide3.jpg",
            tagLine: "Grand choix de couleurs<span>de CMJN aux pantones</span>"
        },
        {
            image: "./assets/images/slideshow/slide4.png",
            tagLine: "Autocollants<span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentIndex = 0;

    // Crée et insère les dots dans le DOM
    slides.forEach((slide, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("dot_selected");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    let dots = document.querySelectorAll(".dot");

    // Fonction pour afficher un slide spécifique
    function showSlide(index) {
        currentIndex = index;
        bannerImg.src = slides[index].image;
        bannerImg.alt = slides[index].tagLine.replace(/<[^>]+>/g, '');
        bannerText.innerHTML = slides[index].tagLine;

        dots.forEach((dot, idx) => {
            dot.classList.toggle("dot_selected", idx === index);
        });
    }

    // Gestionnaires d'événements pour les flèches
    document.querySelector(".arrow_left").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".arrow_right").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Initialisation du premier slide
    showSlide(currentIndex);
});
