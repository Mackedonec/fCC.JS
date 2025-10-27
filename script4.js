function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(null));

function maskEmail(email) {
  let firstPart = email.slice(0, email.indexOf("@"));
  let secondPart = email.slice(email.indexOf("@"));

  let maskedFirstPart =
    firstPart[0] +
    "*".repeat(firstPart.length - 2) +
    firstPart[firstPart.length - 1];

  return maskedFirstPart + secondPart;
}

const email = "apple.pie@example.com";

console.log(maskEmail(email));
