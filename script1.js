console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence."
);

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");

// ------------------------------------

let originalString = "I love cats.";

console.log("Original string:");

console.log(originalString);

let replacedString = originalString.replace("cats", "dogs");

console.log("After using the replace() method:");

console.log(replacedString);

let exampleSentence = "I love cats and cats are so much fun!";

console.log("Original sentence:");

console.log(exampleSentence);

let dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");

console.log("Replacing all occurrences of cats with dogs:");

console.log(dogsOnlySentence);

let learningSentence = "I love learning!";

console.log("Original learning sentence:");

console.log(learningSentence);

let repeatedLove = "love ".repeat(3).trimEnd();

console.log("Repeating love three times:");

console.log(repeatedLove);

let newSentence = "I " + repeatedLove + " learning.";

console.log("New learning sentence:");

console.log(newSentence);
