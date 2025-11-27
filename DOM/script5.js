const textArea = document.getElementById("text-input");
const charCountEl = document.getElementById("char-count");
const countSpan = charCountEl.querySelector(".count");
const cleanButton = document.querySelector(".clean");
const maxLength = textArea.maxLength;

countSpan.textContent = `0/${maxLength}`;

function updateCharCount() {
  let current = textArea.value.length;
  if (current > maxLength) {
    textArea.value = textArea.value.substring(0, maxLength);
    current = maxLength;
  }
  countSpan.textContent = `${current}/${maxLength}`;
  if (current === maxLength) {
    charCountEl.classList.add("limit-reached");
  } else {
    charCountEl.classList.remove("limit-reached");
  }
}

textArea.addEventListener("input", updateCharCount);

cleanButton.addEventListener("click", () => {
  textArea.value = "";
  updateCharCount();
});
