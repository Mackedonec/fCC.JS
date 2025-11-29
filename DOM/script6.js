// const galleryContainer = document.querySelector(".gallery");
// const lightbox = document.querySelector(".lightbox");
// const lightboxImage = document.getElementById("lightbox-image");
// const closeButton = document.getElementById("close-btn");

// galleryContainer.addEventListener("click", (e) => {
//   const clickedImage = e.target.closest(".gallery-item");
//   if (!clickedImage) return;
//   const imageSrc = clickedImage.src.includes("-thumbnail")
//     ? clickedImage.src.replace("-thumbnail", "")
//     : clickedImage.src;
//   lightboxImage.src = imageSrc;
//   lightboxImage.alt = clickedImage.alt;

//   lightbox.classList.add("visible");
// });

// lightbox.addEventListener("click", (e) => {
//   if (e.target === lightbox || e.target === closeButton) {
//     lightbox.classList.remove("visible");
//   }
// });

const galleryContainer = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-btn");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const fullImages = galleryItems.map((item) =>
  item.src.includes("-thumbnail")
    ? item.src.replace("-thumbnail", "")
    : item.src
);
let currentIndex = -1;

function openLightbox(index) {
  currentIndex = index;

  lightboxImage.src = fullImages[index];
  lightboxImage.alt = galleryItems[index].alt;

  lightbox.classList.add("visible");
}

function updateImage() {
  lightboxImage.src = fullImages[currentIndex];
  lightboxImage.alt = galleryItems[currentIndex].alt;
}

galleryContainer.addEventListener("click", (e) => {
  const clickedImage = e.target.closest(".gallery-item");
  if (!clickedImage) return;

  const index = galleryItems.indexOf(clickedImage);
  if (index === -1) return;

  openLightbox(index);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === closeButton) {
    lightbox.classList.remove("visible");
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex === -1) return;

  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateImage();
});

prevButton.addEventListener("click", () => {
  if (currentIndex === -1) return;

  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateImage();
});
