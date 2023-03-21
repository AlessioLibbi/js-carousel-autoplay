// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// // Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// // **MILESTONE 3**
// // Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

 const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
 const itemsContainer = document.querySelector(".slider-items");
 const itemsArray = document.getElementsByClassName("item");
 const thumbnailsContainer = document.querySelector(".thumbnails");
 const thumbnailsArray = document.getElementsByClassName("thumbnail");
 let activeItemIndex = 0;

 for (let i = 0; i < imagesArray.length; i++) {
   const currentImage = imagesArray[i];
   const sliderItem = `
     <div class="item">
       <img src="${currentImage}" alt="">
     </div>`;
   const thumbnailItem = `
     <div class="thumbnail">
       <img src="${currentImage}" alt="">
     </div>`;

   itemsContainer.innerHTML += sliderItem;
   thumbnailsContainer.innerHTML += thumbnailItem;
 }

 itemsArray[activeItemIndex].classList.add("active");
 thumbnailsArray[activeItemIndex].classList.add("active-thumbnail");

 const prevBtn = document.querySelector(".prev");
 const nextBtn = document.querySelector(".next");

 prevBtn.addEventListener("click", function () {

   itemsArray[activeItemIndex].classList.remove("active");

   thumbnailsArray[activeItemIndex].classList.remove("active-thumbnail");

   activeItemIndex--;
  
   if (activeItemIndex === -1) {
     activeItemIndex = itemsArray.length - 1;
   }

   itemsArray[activeItemIndex].classList.add("active");
   thumbnailsArray[activeItemIndex].classList.add("active-thumbnail");
 });

 nextBtn.addEventListener("click", function () {

   itemsArray[activeItemIndex].classList.remove("active");

   thumbnailsArray[activeItemIndex].classList.remove("active-thumbnail");

   activeItemIndex++;
  
   if (activeItemIndex === itemsArray.length) {
     activeItemIndex = 0;
   }

   itemsArray[activeItemIndex].classList.add("active");
   thumbnailsArray[activeItemIndex].classList.add("active-thumbnail");
 });
function autoSlide() {
  itemsArray[activeItemIndex].classList.remove("active");
  thumbnailsArray[activeItemIndex].classList.remove("active-thumbnail");

  activeItemIndex++;

  if (activeItemIndex === itemsArray.length) {
    activeItemIndex = 0;
  }

  itemsArray[activeItemIndex].classList.add("active");
  thumbnailsArray[activeItemIndex].classList.add("active-thumbnail");
}

let autoplayInterval = setInterval(autoSlide, 3000);

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

function startAutoplay() {
  autoplayInterval = setInterval(autoSlide, 3000);
}


itemsContainer.addEventListener("mouseenter", stopAutoplay);
itemsContainer.addEventListener("touchstart", stopAutoplay);


itemsContainer.addEventListener("mouseleave", startAutoplay);
itemsContainer.addEventListener("touchend", startAutoplay);

