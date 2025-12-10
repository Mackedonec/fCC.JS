const vowel = /[aeiou]/i;

function translatePigLatin(str) {
  if (vowel.test(str[0])) {
    return str + "way";
  }

  const firstVowelIndex = str.search(vowel);

  if (firstVowelIndex === -1) {
    return str + "ay";
  }
  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
