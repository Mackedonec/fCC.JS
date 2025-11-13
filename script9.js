// let largestOfAll = function (arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largest = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largest) {
//         largest = arr[i][j];
//       }
//     }
//     result.push(largest);
//   }
//   return result;
// };

let largestOfAll = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = Math.max(...arr[i]);
    result.push(largest);
  }
  return result;
};

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

console.log(
  largestOfAll([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// -------------------------------------------------

let findElement = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

let isEven = function (x) {
  return x % 2 === 0;
};

console.log(findElement([1, 3, 5, 8, 9, 10], isEven));

// -------------------------------------------------

let frankenSplice = function (arr1, arr2, n) {
  let newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++;
  }
  return newArr;
};

console.log(frankenSplice([1, 2, 3], [4, 5], 1));

// -------------------------------------------------

// let pyramid = function (str, n, bool) {
//   let result = "";
//   if (bool) {
//     for (let i = 1; i <= n; i++) {
//       result += str.repeat(i) + "\n";
//     }
//     return result;
//   } else {
//     for (let i = n; i >= 1; i--) {
//       result += str.repeat(i) + "\n";
//     }
//     return result;
//   }
// };

let pyramid = function (str, n, bool) {
  let result = "\n";

  if (!bool) {
    for (let i = 1; i <= n; i++) {
      let spaces = " ".repeat(n - i);
      result += spaces + str.repeat(i * 2 - 1) + "\n";
    }
  } else {
    for (let i = n; i >= 1; i--) {
      let spaces = " ".repeat(n - i);
      result += spaces + str.repeat(i * 2 - 1) + "\n";
    }
  }

  return result;
};

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));

// -----------------------------------------------

let getAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

let getGrade = function (score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

let hasPassingGrade = function (score) {
  let grade = getGrade(score);
  return grade !== "F";
};

let studentMsg = function (classScores, studentScore) {
  let average = getAverage(classScores);
  let grade = getGrade(studentScore);
  let passing = hasPassingGrade(studentScore);

  if (passing) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
};

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// -----------------------------------------------

let titleCase = function (str) {
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0].toUpperCase();
    let otherLatters = word.slice(1).toLowerCase();
    result += firstLetter + otherLatters + " ";
  }
  return result.trim();
};

console.log(titleCase("I'm a little tea pot"));

// -----------------------------------------------

let bouncer = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(bouncer([7, "ate", "", false, 9]));

// -----------------------------------------------

let inventory = [];

let findProductIndex = function (productName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === productName.toLowerCase()) {
      return i;
    }
  }
  return -1;
};

let addProduct = function (product) {
  let index = findProductIndex(product.name);
  if (index === -1) {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(`${product.name.toLowerCase()} added to inventory`);
  } else {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  }
  return inventory;
};

let removeProduct = function (productName, quantity) {
  let index = findProductIndex(productName);
  if (index === -1) {
    console.log(`${productName.toLowerCase()} not found`);
    return;
  }
  if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${productName.toLowerCase()} available, remaining pieces: ${
        inventory[index].quantity
      }`
    );
    return;
  }
  if (inventory[index].quantity === quantity) {
    inventory.splice(index, 1);
  } else {
    inventory[index].quantity -= quantity;
    console.log(
      `Remaining ${productName.toLowerCase()} pieces: ${
        inventory[index].quantity
      }`
    );
  }
};

addProduct({ name: "FLOUR", quantity: 5 });
console.log(inventory);
removeProduct("FLOUR", 4);
console.log(inventory);
