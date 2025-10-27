// console.log("Grocery shopping list");

// let shoppingList = [];

// console.log("It will be nice to have some fruit to eat.");

// shoppingList.push("Apples");

// function getShoppingListMsg(shoppingList) {
//   return `Current Shopping List: ${shoppingList}`;
// }

// console.log(getShoppingListMsg(shoppingList));

// shoppingList.push("Grapes");

// console.log(getShoppingListMsg(shoppingList));

// console.log("It looks like we need to get some cooking oil.");

// shoppingList.unshift("Vegetable Oil");

// console.log(getShoppingListMsg(shoppingList));

// shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");

// console.log(getShoppingListMsg(shoppingList));

// console.log("This looks like too much junk food.");

// shoppingList.pop();

// console.log(getShoppingListMsg(shoppingList));

// console.log("It might be nice to get a dessert.");

// shoppingList.unshift("Chocolate Cake");

// console.log(getShoppingListMsg(shoppingList));

// console.log("On second thought, maybe we should be more health conscious.");

// shoppingList.shift();

// console.log(getShoppingListMsg(shoppingList));

// shoppingList[0] = "Canola Oil";

// console.log(getShoppingListMsg(shoppingList));

// ---------------------------------------------

let lunches = [];

function addLunchToEnd(lunches, lunchItem) {
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  lunches.push(lunchItem);
  return lunches;
}

addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Pasta");
addLunchToEnd(lunches, "Salad");
addLunchToEnd(lunches, "Steak");

function addLunchToStart(lunches, lunchItem) {
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  lunches.unshift(lunchItem);
  return lunches;
}

addLunchToStart(lunches, "Burger");
addLunchToStart(lunches, "Sushi");
addLunchToStart(lunches, "Steak");
addLunchToStart(lunches, "Pork");

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    return console.log("No lunches to remove.");
  } else {
    let lunchItem = lunches.pop();
    console.log(`${lunchItem} removed from the end of the lunch menu.`);
  }
  return lunches;
}

removeLastLunch(lunches);
removeLastLunch(lunches);
removeLastLunch(lunches);

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    return console.log("No lunches to remove.");
  } else {
    let lunchItem = lunches.shift();
    console.log(`${lunchItem} removed from the start of the lunch menu.`);
  }
  return lunches;
}

removeFirstLunch(lunches);
removeFirstLunch(lunches);

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    return console.log("No lunches available.");
  } else {
    let randomLunch = Math.floor(Math.random() * lunches.length);
    let lunchItem = lunches[randomLunch];
    console.log(`Randomly selected lunch: ${lunchItem}`);
  }
  return lunches;
}

getRandomLunch(lunches);

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    return console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
  return lunches;
}

console.log(showLunchMenu(lunches));

// ---------------------------------------------

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  }
  if (strokes <= par - 2) {
    return names[1];
  }
  if (strokes === par - 1) {
    return names[2];
  }
  if (strokes === par) {
    return names[3];
  }
  if (strokes === par + 1) {
    return names[4];
  }
  if (strokes === par + 2) {
    return names[5];
  }
  if (strokes >= par + 3) {
    return names[6];
  } else {
    return "Change Me";
  }
}

function golfScore1(par, strokes) {
  let result;

  switch (true) {
    case strokes === 1:
      result = names[0];
      break;
    case strokes <= par - 2:
      result = names[1];
      break;
    case strokes === par - 1:
      result = names[2];
      break;
    case strokes === par:
      result = names[3];
      break;
    case strokes === par + 1:
      result = names[4];
      break;
    case strokes === par + 2:
      result = names[5];
      break;
    case strokes >= par + 3:
      result = names[6];
      break;
    default:
      result = "Change Me";
  }

  return result;
}

function golfScore2(par, strokes) {
  switch (true) {
    case strokes === 1:
      return names[0];

    case strokes <= par - 2:
      return names[1];

    case strokes === par - 1:
      return names[2];

    case strokes === par:
      return names[3];

    case strokes === par + 1:
      return names[4];

    case strokes === par + 2:
      return names[5];

    case strokes >= par + 3:
      return names[6];

    default:
      return "Change Me";
  }
}

// ---------------------------------------------

function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}

console.log(reverseString("hello world, how are you?"));

// ---------------------------------------------

const arr = ["apple", "banana", "cherry", "date"];
const slicedArr = arr.slice(1, 3);
console.log(slicedArr);

const arr2 = ["apple", "banana", "cherry", "date"];
const slicedArr2 = arr2.splice(1, 3);
console.log(slicedArr2);
