const themes = [
  { name: "theme-light", message: "This is a light theme." },
  { name: "theme-dark", message: "This is a dark theme." },
  { name: "theme-red", message: "This is a red theme." },
  { name: "theme-blue", message: "This is a blue theme." },
];

const body = document.querySelector("body");
const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeLight = document.getElementById("theme-light");
const themeDark = document.getElementById("theme-dark");
const themeRed = document.getElementById("theme-red");
const themeBlue = document.getElementById("theme-blue");
const themeMessage = document.getElementById("status");

function toggleMenu() {
  const isExpanded = themeButton.getAttribute("aria-expanded") === "true";
  themeButton.setAttribute("aria-expanded", String(!isExpanded));
  themeDropdown.hidden = isExpanded;
}

themeButton.addEventListener("click", toggleMenu);

function setTheme(themeName) {
  themes.forEach((theme) => body.classList.remove(theme.name));
  body.classList.add(themeName);

  const selectedTheme = themes.find((theme) => theme.name === themeName);
  themeMessage.textContent = selectedTheme.message;

  toggleMenu();
}

themeLight.addEventListener("click", () => {
  setTheme("theme-light");
});

themeDark.addEventListener("click", () => {
  setTheme("theme-dark");
});

themeRed.addEventListener("click", () => {
  setTheme("theme-red");
});

themeBlue.addEventListener("click", () => {
  setTheme("theme-blue");
});

// const themes = [
//   { name: "theme-light", message: "This is a light theme." },
//   { name: "theme-dark", message: "This is a dark theme." },
//   { name: "theme-red", message: "This is a red theme." },
//   { name: "theme-blue", message: "This is a blue theme." },
// ];

// const body = document.querySelector("body");
// const themeButton = document.getElementById("theme-switcher-button");
// const themeDropdown = document.getElementById("theme-dropdown");
// const themeLight = document.getElementById("theme-light");
// const themeDark = document.getElementById("theme-dark");
// const themeRed = document.getElementById("theme-red");
// const themeBlue = document.getElementById("theme-blue");
// const themeMessage = document.getElementById("status");

// function toggleMenu() {
//   const isExpanded = themeButton.getAttribute("aria-expanded") === "true";
//   themeButton.setAttribute("aria-expanded", String(!isExpanded));
//   themeDropdown.hidden = isExpanded;
// }

// themeButton.addEventListener("click", toggleMenu);

// function setTheme(themeName) {
//   themes.forEach((theme) => body.classList.remove(theme.name));

//   body.classList.add(themeName);

//   const selectedTheme = themes.find((theme) => theme.name === themeName);
//   themeMessage.textContent = selectedTheme.message;

//   toggleMenu();
// }

// const buttons = [themeLight, themeDark, themeRed, themeBlue];

// for (const btn of buttons) {
//   btn.addEventListener("click", () => {
//     setTheme(btn.id);
//   });
// }
