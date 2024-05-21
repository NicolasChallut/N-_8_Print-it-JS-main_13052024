document.addEventListener("DOMContentLoaded", function () {
	let carousel = document.getElementById("banner");
	let dotsContainer = document.querySelector(".dots");
	
	// Tableau de données avec les images
	const slides = [
		{
			image: "./assets/images/slideshow/slide1.jpg",
			tagLine: "<p>Impressions tous formats<span>en boutique et en ligne</span><p>"
		},
		{
			image: "./assets/images/slideshow/slide2.jpg",
			tagLine: "<p>Tirages haute définition grand format<span>pour vos bureaux et events</span><p>"
		},
		{
			image: "./assets/images/slideshow/slide3.jpg",
			tagLine: "<p>Grand choix de couleurs<span>de CMJN aux pantones</span><p>"
		},
		{
			image: "./assets/images/slideshow/slide4.png",
			tagLine: "<p>Autocollants<span>avec découpe laser sur mesure</span><p>"
		}
	];
  
	// Crée et insère les items dans le DOM
	slides.forEach((slide, index) => {
		let item = document.createElement("img");
		item.classList.add("banner-img");
		item.src=slide.image;
		item.innerHTML=slide.tagLine;
		if (index !== 0) item.style.display = "none";  // Cacher tous sauf le premier au départ
		carousel.appendChild(item);

		

		
	  
		let dot = document.createElement("span");
		dot.classList.add("dot");
		if (index === 0) dot.classList.add("dot_selected");
		dot.dataset.index = index;
		dotsContainer.appendChild(dot);
	});
  
	let items = carousel.querySelectorAll(".banner-img");
	let dots = document.querySelectorAll(".dot");
  
	// Fonction pour afficher un élément spécifique
	function showItem(index) {
		items.forEach((item, idx) => {
			item.style.display = idx === index ? "block" : "none";
			dots[idx].classList.toggle("dot_selected", idx === index);
		});
	}
  
	// Gestionnaires d'événements pour les boutons
	document.querySelector(".arrow_left").addEventListener("click", () => {
		let index = [...items].findIndex((item) =>
			item.style.display === "block"
		);
		showItem((index - 1 + items.length) % items.length);
	});
  
	document.querySelector(".arrow_right").addEventListener("click", () => {
		let index = [...items].findIndex((item) =>
			item.style.display === "block"
		);
		showItem((index + 1) % items.length);
	});
  
	// Gestionnaires d'événements pour les dots
	dots.forEach((dot) => {
		dot.addEventListener("click", () => {
			let index = parseInt(dot.dataset.index);
			showItem(index);
		});
	});
});
