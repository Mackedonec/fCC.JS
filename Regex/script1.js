const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkInput() {
  const str = textInput.value;

  if (str === "") {
    alert("Please input a value");
    result.textContent = "";
    return;
  }

  const cleanRegex = /[^A-Za-z0-9]/g;
  const cleanedStr = str.replace(cleanRegex, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  const isPalindrome = cleanedStr === reversedStr;

  if (isPalindrome) {
    result.textContent = `${str} is a palindrome`;
  } else {
    result.textContent = `${str} is not a palindrome`;
  }

  textInput.value = "";
}

checkBtn.addEventListener("click", checkInput);
textInput.addEventListener("input", () => {
  result.textContent = "";
});
