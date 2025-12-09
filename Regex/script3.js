// const kebabCase = /([a-z])([A-Z])/g;
// const otherSymbols = /\s|_|,/g;
// function spinalCase(str) {
//   let spinalStr = str
//     .replace(kebabCase, "$1-$2")
//     .replace(otherSymbols, "-")
//     .toLowerCase();
//   return spinalStr;
// }

// console.log(spinalCase("thisIsSpinalTap"));
// console.log(spinalCase("This Is Spinal Tap"));
// console.log(spinalCase("The_Andy_Griffith_Show"));
// console.log(spinalCase("Teletubbies say Eh-oh"));

const kebabCase = /([a-z])([A-Z])/g;
const otherSymbols = /[^a-zA-Z0-9]+/g;
const trimDashes = /^-+|-+$/g;

function spinalCase(str) {
  return str
    .replace(kebabCase, "$1-$2")
    .replace(otherSymbols, "-")
    .toLowerCase()
    .replace(trimDashes, "");
}

console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
