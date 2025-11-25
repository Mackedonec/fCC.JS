// const happyBtn = document.getElementById("happy-btn");
// const confusedBtn = document.getElementById("confused-btn");
// const sadBtn = document.getElementById("sad-btn");
// const lovingBtn = document.getElementById("loving-btn");

const btns = document.querySelectorAll(".emoji-btn");

let updateCount = function (btn) {
  const countEl = btn.querySelector(".count");
  const countText = countEl.textContent;
  const parts = countText.split("/");
  const currCount = parseInt(parts[0], 10);
  const maxCount = parseInt(parts[1], 10);
  if (currCount < maxCount) {
    const newCount = currCount + 1;
    countEl.textContent = `${newCount}/${maxCount}`;
  }
};

// happyBtn.addEventListener("click", () => {
//   updateCount(happyBtn);
// });

// confusedBtn.addEventListener("click", () => {
//   updateCount(confusedBtn);
// });

// sadBtn.addEventListener("click", () => {
//   updateCount(sadBtn);
// });

// lovingBtn.addEventListener("click", () => {
//   updateCount(lovingBtn);
// });

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateCount(btn);
  });
});
