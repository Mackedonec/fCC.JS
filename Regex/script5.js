function myReplace(str, first, second) {
  const regex = new RegExp(first, "g");

  let correctedSecond;

  if (first[0] === first[0].toUpperCase()) {
    correctedSecond = second[0].toUpperCase() + second.slice(1);
  } else {
    correctedSecond = second[0].toLowerCase() + second.slice(1);
  }

  return str.replace(regex, correctedSecond);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
