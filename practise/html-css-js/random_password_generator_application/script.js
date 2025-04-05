const inputSlider = document.querySelector(".inputSlider");
const sliderValue = document.querySelector(".sliderValue");
const passBox = document.querySelector(".passBox");

const lowercaseEl = document.querySelector("#lowercase");
const uppercseEl = document.querySelector("#uppercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");

const generateBtn = document.querySelector(".genBtn");
const copyBtn = document.querySelector(".copyIcon");
const passIndicator = document.querySelector(".pass-indicator");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
  generatePassword();
});

function generatePassword() {
  const length = parseInt(inputSlider.value);
  let characters = "";
  let password = "";
  characters += lowercaseEl.checked ? lowercaseLetters : "";
  characters += uppercseEl.checked ? uppercaseLetters : "";
  characters += numbersEl.checked ? numbers : "";
  characters += symbolsEl.checked ? symbols : "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * characters.length) + 1;
    password += characters.charAt(random);
  }
  passBox.value = password;
  updatePasswordIndicator();
}

generateBtn.addEventListener("click", () => {
  generatePassword();
});

function updatePasswordIndicator() {
  const passwordStrength = getPasswordStrength(passBox.value);
  console.log(passwordStrength);
  passIndicator.className = "pass-indicator " + passwordStrength;
}
function getPasswordStrength(password) {
  if (password.length <= 10) {
    return "weak";
  } else if (password.length <= 20) {
    return "medium";
  } else {
    return "strong";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updatePasswordIndicator();
});

copyBtn.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyBtn.textContent = "check";
    setTimeout(() => {
      copyBtn.textContent = "content_copy";
    }, 3000);
  }
});
