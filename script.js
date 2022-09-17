let inputText = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const span = document.querySelector(".result p");
let filterText;
checkBtn.addEventListener("click", () => {
  let reverseText = filterText.toLowerCase().split("").reverse().join("");
  span.style.display = "block";
  if (filterText === reverseText) {
    return span.innerHTML = `Yes, <span>${inputText.value}</span> is a Palindrome`;
  }
  span.innerHTML = `No, <span>${inputText.value}</span> isn't a Palindrome`;
});
inputText.addEventListener("keyup", () => {
  filterText = inputText.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterText) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
  span.style.display = "none";
});
