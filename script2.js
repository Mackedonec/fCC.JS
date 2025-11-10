let botName = "MathBot";
let greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log(
  "The Math.random() method returns a pseudo random number between 0 and less than 1."
);

let randomNum = Math.random();

console.log(randomNum);

console.log("Now, generate a random number between two values.");

let min = 1;
let max = 100;

let randomNum2 = Math.random() * (max - min + 1) + min;

console.log(randomNum2);

console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer."
);

let numRoundedDown = Math.floor(6.7);

console.log(numRoundedDown);

console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer."
);

let numRoundedUp = Math.ceil(3.2);

console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

let numRounded = Math.round(2.7);

console.log(numRounded);

let numRounded2 = Math.round(11.2);

console.log(numRounded2);

console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range."
);

let maxNum = Math.max(3, 125, 55, 24);

console.log(maxNum);

let minNum = Math.min(6, 90, 14, 90, 2);

console.log(minNum);

console.log("It was fun learning about the different Math methods with you!");

// -------------------------------------

let fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(
  `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`
);

let hasJavaScript = fccSentence.includes("JavaScript");
console.log(
  `fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`
);

let hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(
  `fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`
);

let message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

let platform = message.slice(11, 23);

console.log(`The word "${platform}" was sliced from the message.`);

let greetingWord = message.slice(0, 7);

console.log(`The first word is "${greetingWord}".`);

let endPunctuation = message.slice(-1);

console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log(
  "Workshop complete! You now know how to use includes() and slice()."
);

// -------------------------------------

let userInput = "   Hello World!   ";

console.log("Original input:");

console.log(userInput);

let cleanedInput = userInput.trim();

console.log("Result of trimming whitespace from both ends:");

console.log(cleanedInput);

let trimmedStart = userInput.trimStart();

console.log("After using the trimStart() method — leading spaces removed:");

console.log(trimmedStart);

let trimmedEnd = userInput.trimEnd();

console.log("After using the trimEnd() method — trailing spaces removed:");

console.log(trimmedEnd);

let upperCaseInput = cleanedInput.toUpperCase();

console.log("Result of using the toUpperCase() method:");

console.log(upperCaseInput);

let lowerCaseInput = cleanedInput.toLowerCase();

console.log("Result of using the toLowerCase() method:");

console.log(lowerCaseInput);

let lowercaseWord = "camelcase";

let camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(-3);

console.log("Camel cased version:");

console.log(camelCasedVersion);
