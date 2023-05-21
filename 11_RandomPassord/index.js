const generBtn = document.querySelector(".btn");
const copyBtn = document.querySelector(".input i");
const passwBox = document.querySelector(".password");

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const number = "0123456789";
const symbol = "!@#$%^&*()-=_+[]/.,;<>{}";
const length = 12;
const allChar = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passwBox.value = password;
};

const copyPassword = () => {
  passwBox.select();
  document.execCommand("copy");
};

generBtn.addEventListener("click", () => createPassword());
copyBtn.addEventListener("click", () => copyPassword());
