const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

const selectContainer = document.querySelector(".select-container");
const productsContainer = document.querySelector(".products-container");
productsContainer.innerHTML = instrumentsArr
  .map(
    (item) =>
      `<div class="card"><h2>${item.instrument}</h2><p>$${item.price}</p></div>`
  )
  .join("");

function instrumentCards(category) {
  let filtered;

  if (category === "all") {
    filtered = instrumentsArr;
  } else if (category === "woodwinds") {
    filtered = instrumentsArr.filter(function (item) {
      return item.category === "woodwinds";
    });
  } else if (category === "brass") {
    filtered = instrumentsArr.filter(function (item) {
      return item.category === "brass";
    });
  } else if (category === "percussion") {
    filtered = instrumentsArr.filter(function (item) {
      return item.category === "percussion";
    });
  } else {
    filtered = [];
  }
  const cardsArray = filtered
    .map(
      (item) =>
        `<div class="card"><h2>${item.instrument}</h2><p>$${item.price}</p></div>`
    )
    .join("");

  return cardsArray;
}

// function instrumentCards(category) {
//   let filtered =
//     category === "all"
//       ? instrumentsArr
//       : instrumentsArr.filter((item) => item.category === category);

//   const cardsArray = filtered.map(
//     (item) =>
//       `<div class="card"><h2>${item.instrument}</h2><p>$${item.price}</p></div>`
//   ).join("");

//   return cardsArray;
// }

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
