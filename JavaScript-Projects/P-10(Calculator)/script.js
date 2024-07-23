let calScreen = document.querySelector(".calculator-screen");
let buttons = document.querySelectorAll(".click");
let equalBtn = document.querySelector(".clickequal");
let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;
    if (value === "C") {
      currentInput = "";
      calScreen.textContent = currentInput;
    } else if (value === "Del") {
      // Delete the last character
      currentInput = currentInput.slice(0, -1);
      calScreen.textContent = currentInput;
      // This line uses the slice() method to update currentInput. The slice(0, -1) call extracts a portion of the string from index 0 up to (but not including) the last character. By specifying -1 as the second argument, it effectively removes the last character from currentInput.
    } else {
      currentInput += value;
      calScreen.textContent = currentInput;
    }
  });
});
// Add event listener to the "=" button
equalBtn.addEventListener("click", () => {
  try {
    let result = eval(currentInput);
    calScreen.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    calScreen.textContent = "Error";
    currentInput = "";
  }
});
