const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const text = stringToTest.innerHTML;
  const flags = getFlags();

  let regex;
  try {
    regex = new RegExp(pattern, flags);
  } catch (err) {
    testResult.textContent = "no match";
    return;
  }

  const matches = text.match(regex);

  if (!matches) {
    testResult.textContent = "no match";
    return;
  }

  let highlightedText;

  if (flags.includes("g")) {
    highlightedText = text.replace(regex, (match) => {
      return `<span class="highlight">${match}</span>`;
    });
  } else {
    highlightedText = text.replace(regex, `<span class="highlight">$&</span>`);
  }

  stringToTest.innerHTML = highlightedText;

  testResult.textContent = matches.join(", ");
});
