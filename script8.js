function getVowelCount(sentence) {
  let count = 0;
  const vowels = "aeiou";
  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  let count = 0;
  const consonant = "bcdfghjklmnpqrstvwxyz";
  for (const char of sentence.toLowerCase()) {
    if (consonant.includes(char)) {
      count++;
    }
  }
  return count;
}

let consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  let count = 0;
  const punctuation = "'.,!?";
  for (const char of sentence) {
    if (punctuation.includes(char)) {
      count++;
    }
  }
  return count;
}

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  let count = 0;
  const words = sentence.split(" ");
  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }
  return count;
}

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);

// --------------------------------------------------

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// --------------------------------------------------

let num = 20;

function factorialCalculator(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

// --------------------------------------------------

function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (const letter of secondWord) {
    if (!firstWord.includes(letter)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Army"]));

// --------------------------------------------------

function chunkArrayInGroups(arr, size) {
  let arrays = [];
  for (let i = 0; i < arr.length; i += size) {
    arrays.push(arr.slice(i, i + size));
  }
  return arrays;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

// --------------------------------------------------

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
//       return contacts[i][prop];
//     }
//     if (contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)) {
//       return "No such property";
//     }
//     if (contacts[i].firstName === name) {
//       return contacts[i].firstName;
//     }
//   }
//   return "No such contact";
// }

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Akira", "addres"));

// --------------------------------------------------

function repeatStringNumTimes(str, num) {
  // return str.repeat(num);

  let result = "";
  if (num < 0) {
    return result;
  } else {
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));

// --------------------------------------------------

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// --------------------------------------------------

function sameFunc(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) continue;
    arr.push(i);
  }
  return arr;
}

function sameFunc2(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) continue;
    arr.push(i);
  }
  return arr;
}

console.log(sameFunc(100));
console.log(sameFunc(120));

console.log(sameFunc2(100));
console.log(sameFunc2(120));
