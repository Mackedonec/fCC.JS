let uniteUnique = function (...arrays) {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (!result.includes(arrays[i][j])) {
        result.push(arrays[i][j]);
      }
    }
  }
  return result;
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// -------------------------------------------------

let generatePassword = function (num = 16) {
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = "";
  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    pass += symbols[randomIndex];
  }
  return pass;
};

let password = generatePassword();
console.log(`Generated password: ${password}`);

// -------------------------------------------------

// let sumAll = function (arr) {
//   let x = arr[0];
//   let y = arr[1];
//   let result = 0;

//   if (x < y) {
//     for (let i = x; i <= y; i++) {
//       result += i;
//     }
//   }
//   if (x > y) {
//     for (let i = y; i <= x; i++) {
//       result += i;
//     }
//   }

//   return result;
// };

let sumAll = function (arr) {
  let x = arr[0];
  let y = arr[1];
  let result = 0;
  let min = Math.min(x, y);
  let max = Math.max(x, y);

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
};

console.log(sumAll([10, 5]));

// -------------------------------------------------

let pairElement = function (str) {
  let result = [];
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  for (let i = 0; i < str.length; i++) {
    //  result.push([str[i], pairs[str[i]]]);

    let base = str[i];
    let pair = pairs[base];
    result.push([base, pair]);
  }
  return result;
};

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));

// -------------------------------------------------

let convertHTML = function (str) {
  let newStr = "";
  let symbolMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let symbol = symbolMap[char];
    if (symbol) {
      newStr += symbol;
    } else {
      newStr += char;
    }
  }
  return newStr;
};

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// -------------------------------------------------

let sumFibs = function (num) {
  let a = 0;
  let b = 1;
  let sum = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }
    let c = a + b;
    a = b;
    b = c;
  }
  return sum;
};

console.log(sumFibs(4));
console.log(sumFibs(75025));
console.log(sumFibs(750250));

// -------------------------------------------------

let dropElements = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
};

console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 10;
  })
);

// -------------------------------------------------

let addTogether = function (a, b) {
  if (typeof a !== "number") {
    return undefined;
  }

  if (arguments.length === 2) {
    if (typeof b !== "number") {
      return undefined;
    }
    return a + b;
  }

  return function (x) {
    if (typeof x !== "number") {
      return undefined;
    }
    return a + x;
  };
};

console.log(addTogether(2, 3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
console.log(addTogether(5, undefined));

// -------------------------------------------------
