function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertCtoF(30));

// ------------------------------------

let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  }

  if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));

// ------------------------------------

let year = 1900;

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

let result = isLeapYear(year);

console.log(result);

// ------------------------------------

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
    //   return str.substring (0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// ------------------------------------

function confirmEnding(str, target) {
  if (str.slice(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

// ------------------------------------

const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 2) + 10);
