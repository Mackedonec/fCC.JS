let recipes = [];
let recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  ratings: [4, 5, 4, 5],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};

let recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  ratings: [4, 5, 5, 5],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};

let recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);

// function getAverageRating(ratings) {
//   let totalRating = ratings.reduce((sum, value) => sum + value, 0);
//   let averageRating = totalRating / ratings.length;
//   return averageRating;
// }

// function getAverageRating(ratings) {
//   const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
//   return total / ratings.length;
// }

function getAverageRating(ratings) {
  let total = 0;
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i];
  }
  return total / ratings.length;
}

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

let recipe1AverageRating = getAverageRating(recipe1.ratings);
let recipe2AverageRating = getAverageRating(recipe2.ratings);
let recipe3AverageRating = getAverageRating(recipe3.ratings);

console.log(recipe1AverageRating);
console.log(recipe2AverageRating);
console.log(recipe3AverageRating);

let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
let recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
let recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);

console.log(recipe1TotalIngredients);
console.log(recipe2TotalIngredients);
console.log(recipe3TotalIngredients);

let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
let recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
let recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipe1DifficultyLevel);
console.log(recipe2DifficultyLevel);
console.log(recipe3DifficultyLevel);

recipe1.averageRating = recipe1AverageRating;
recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

recipe2.averageRating = recipe2AverageRating;
recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;

recipe3.averageRating = recipe3AverageRating;
recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;

console.log(recipes);

// -------------------------------------------------

let questions = [
  {
    category: "Science: Computers",
    question: "What does CSS stand for?",
    choices: [
      "Counter Strike: Source",
      "Cascading Style Sheet",
      "Cascading Super Stone",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    category: "Science: Computers",
    question: "What does HTML stand for?",
    choices: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    category: "Science: Computers",
    question: "What does XML stand for?",
    choices: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXamine Multiple Language",
    ],
    answer: "eXtensible Markup Language",
  },
  {
    category: "Science: Computers",
    question: "What does PSU stand for?",
    choices: ["Power Supply", "Power Super", "Power Source"],
    answer: "Power Supply",
  },
  {
    category: "Science: Computers",
    question: "What does RAM stand for?",
    choices: [
      "Random Access Memory",
      "Random Area Memory",
      "Random Access Machine",
    ],
    answer: "Random Access Memory",
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

const randomQuestion = getRandomQuestion(questions);

function getRandomComputerChoice(randomQuestion) {
  const randomIndex = Math.floor(Math.random() * randomQuestion.choices.length);
  return randomQuestion.choices[randomIndex];
}

const computerChoice = getRandomComputerChoice(randomQuestion);

function getResults(randomQuestion, computerChoice) {
  if (randomQuestion.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${randomQuestion.answer}`;
  }
}
console.log(randomQuestion.question);
console.log(computerChoice);
console.log(getResults(randomQuestion, computerChoice));

// -------------------------------------------------

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     if (records[id].hasOwnProperty("tracks")) {
//       records[id].tracks.push(value);
//     } else {
//       records[id][prop] = [value];
//     }
//   } else {
//     records[id][prop] = value;
//   }

//   return records;
// }

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
    return records;
  }
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
    return records;
  }
  if (
    prop === "tracks" &&
    value !== "" &&
    !records[id].hasOwnProperty("tracks")
  ) {
    records[id][prop] = [];
  }

  records[id].tracks.push(value);

  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

console.log(recordCollection);

// -------------------------------------------------
