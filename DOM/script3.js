// const icons = document.querySelectorAll(".favorite-icon");

// icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     icon.classList.toggle("filled");
//     icon.innerHTML = icon.classList.contains("filled") ? `&#10084;` : `&#9825;`;
//   });
// });

document.addEventListener("click", (event) => {
  const icon = event.target.closest(".favorite-icon");
  if (!icon) return;
  icon.classList.toggle("filled");
  icon.innerHTML = icon.classList.contains("filled") ? "&#10084;" : "&#9825;";
});
