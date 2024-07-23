
let calScreen = document.querySelector(".calculator-screen");
let buttons = document.querySelectorAll(".click");
let equalBtn = document.querySelector(".clickequal");
let currentInput = "";

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        calScreen.textContent = currentInput;
    });
});

// Add event listener to the "=" button
equalBtn.addEventListener("click", () => {
    try {
        // Evaluate the expression
        let result = eval(currentInput);
        // Display the result
        calScreen.textContent = result;
        // Update currentInput to result for further calculations
        currentInput = result.toString();
    } catch {
        // Display "Error" if the evaluation fails
        calScreen.textContent = "Error";
        // Clear currentInput
        currentInput = "";
    }
});
