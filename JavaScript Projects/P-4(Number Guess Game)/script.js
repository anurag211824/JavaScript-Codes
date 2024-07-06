let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let previousGuesses = [];

let guessField = document.querySelector("#guessField");
let submitButton = document.getElementById("submit");
let prevGuessDisplay = document.querySelector(".guesses");
let remainingAttempts = document.querySelector(".lastResult");
let lowHighDisplay = document.querySelector(".lowHigh");
let newGameContainer = document.querySelector(".newgame");

submitButton.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = Number(guessField.value);

  // checking a valid number
  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    lowHighDisplay.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  previousGuesses.push(userGuess);
  attempts--;

  prevGuessDisplay.textContent = previousGuesses.join(", ");
  remainingAttempts.textContent = `Remaining attempts: ${attempts}`;

  if (userGuess === randomNumber) {
    lowHighDisplay.textContent = `Congratulations! You got it right! The number was: ${randomNumber}`;
    setGameOver();
  } else if (attempts === 0) {
    lowHighDisplay.textContent = `Game over! The number was: ${randomNumber}`;
    setGameOver();
  } else if (userGuess < randomNumber) {
    lowHighDisplay.textContent = "Too low! Try again.";
  } else {
    lowHighDisplay.textContent = "Too high! Try again.";
  }

  guessField.value = '';
}

function setGameOver() {
  guessField.disabled = true;
  submitButton.disabled = true;
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Start New Game';
  resetButton.id = 'newGameButton';
  newGameContainer.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  attempts = 10;
  previousGuesses = [];
  guessField.disabled = false;
  submitButton.disabled = false;
  guessField.value = '';

  prevGuessDisplay.textContent = '';
  remainingAttempts.textContent = `Remaining attempts: ${attempts}`;
  lowHighDisplay.textContent = '';

  const resetButton = document.getElementById('newGameButton');
  newGameContainer.removeChild(resetButton);

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
