let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordbox = document.querySelector(".password-box");
const genratePasswordBTn = document.querySelector(".genrate-password-btn");
const newPasswordBTn = document.querySelector(".genrate-new-password-btn");
const changeTheme = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");

let passwordLength = 8;

genratePasswordBTn.addEventListener("click", function genrateRandomPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * alphabets.length);
    password += alphabets[randomIndex];
  }
  passwordbox.value = password;
});

changeTheme.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    changeTheme.innerText = "Light Mode";
  } else {
    changeTheme.innerText = "Dark Mode";
  }
});
const copyBtn = document.querySelector(".copy-password-btn");
const passwordBox = document.querySelector(".password-box");

copyBtn.addEventListener("click", function () {
  const password = passwordBox.value;

  if (password !== "") {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
          copyBtn.innerText = "Copy Password";
        }, 1500);
      })
      .catch(() => {
        alert("Failed to copy password.");
      });
  } else {
    alert("No password to copy!");
  }
});
