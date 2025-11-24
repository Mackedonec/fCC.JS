const storyContainer = document.querySelector(".story-container");
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");
const mysteryStoryBtn = document.getElementById("mystery-btn");
const resultParagraph = document.getElementById("result");

let storyObj = {
  scary: {
    story:
      "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
    borderColor: "#ee4b2b",
    color: "#ee4b2b",
  },

  funny: {
    story:
      "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
    borderColor: "#f1be32",
    color: "#f1be32",
  },

  adventure: {
    story:
      "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
    borderColor: "#acd157",
    color: "#acd157",
  },
};

let displayStory = function (genre) {
  if (storyObj[genre]) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
    resultParagraph.style.color = storyObj[genre].color;
  }
};

let addNewStory = function (genre, story, borderColor, color, btn) {
  storyObj[genre] = {
    story: story,
    borderColor: borderColor,
    color: color,
  };
};

addNewStory(
  "mystery",
  "In the quiet town of Ravenwood, a series of unexplained disappearances has left the community on edge. Detective Laura Collins is determined to uncover the truth behind the eerie occurrences, leading her down a path filled with secrets and suspense.",
  "#8e44ad",
  "#8e44ad"
);

scaryStoryBtn.addEventListener("click", function () {
  displayStory("scary");
});

funnyStoryBtn.addEventListener("click", function () {
  displayStory("funny");
});

adventureStoryBtn.addEventListener("click", function () {
  displayStory("adventure");
});

mysteryStoryBtn.addEventListener("click", function () {
  displayStory("mystery");
});

// const storyContainer = document.querySelector(".story-container");
// const scaryStoryBtn = document.getElementById("scary-btn");
// const funnyStoryBtn = document.getElementById("funny-btn");
// const adventureStoryBtn = document.getElementById("adventure-btn");
// const resultParagraph = document.getElementById("result");

// scaryStoryBtn.addEventListener("click", function () {
//   resultParagraph.textContent =
//     "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.";
//   storyContainer.style.borderColor = "#ee4b2b";
//   resultParagraph.style.color = "#ee4b2b";
// });

// funnyStoryBtn.addEventListener("click", function () {
//   resultParagraph.textContent =
//     "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.";
//   storyContainer.style.borderColor = "#f1be32";
//   resultParagraph.style.color = "#f1be32";
// });

// adventureStoryBtn.addEventListener("click", function () {
//   resultParagraph.textContent =
//     "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.";
//   storyContainer.style.borderColor = "#acd157";
//   resultParagraph.style.color = "#acd157";
// });
