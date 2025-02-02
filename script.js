/* PASSWORD GENERATOR */

// Captures
let pwEl = document.querySelector("#pwEl");
let lengthEl = document.querySelector("#lengthEl");
let lowerCaseEl = document.querySelector("#lowerCaseEl");
let upperCaseEl = document.querySelector("#upperCaseEl");
let numberEl = document.querySelector("#numberEl");
let symbolEl = document.querySelector("#symbolEl");
let btnGenerator = document.querySelector("#btnGenerator");
let btnClipboard = document.querySelector("#btnClipboard");
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!$%&'()*+,-./:;<=>?@[]^_{|}~";

// Constants for logging
console.log(`upperLetters ${upperLetters}`);

// Functions
function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = lengthEl.value;
  let password = "";
  for (let i = 0; i < length; i++) {
    let x = generateX();
    password += x;
  }
  if (!password) {
    pwEl.textContent = "Check a box to generate a password";
  } else {
    pwEl.textContent = password;
  }
}

function generateX() {
  const xs = [];
  if (lowerCaseEl.checked) {
    xs.push(getLowerCase());
  }
  if (upperCaseEl.checked) {
    xs.push(getUpperCase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) {
    return "";
  }
  return xs[Math.floor(Math.random() * xs.length)];
}

function copyClipboard() {
  const cb = navigator.clipboard;
  const password = pwEl;
  cb.writeText(password.textContent).then(() => alert("Password copied"));
}

// Generate Password Click Event
btnGenerator.addEventListener("click", () => {
  generatePassword();
});

btnClipboard.addEventListener("click", () => {
  copyClipboard();
});

// Range Slider Value
let lengthVal = document.querySelector("#lengthVal");
lengthVal.textContent = `Password Length ${lengthEl.value}`;

lengthEl.oninput = function () {
  lengthVal.textContent = `Password Length ${lengthEl.value}`;
};
