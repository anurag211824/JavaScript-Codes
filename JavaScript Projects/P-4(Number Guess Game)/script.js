let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let previousGuesses = [];

const guessField = document.getElementById('guessField');
const submitButton = document.getElementById('submit');
const guessesDisplay = document.querySelector('.guesses');
const remainingDisplay = document.querySelector('.lastResult');
const lowHighDisplay = document.querySelector('.lowHigh p');
const newGameContainer = document.querySelector('.newgame');

submitButton.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = Number(guessField.value);

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    lowHighDisplay.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  previousGuesses.push(userGuess);
  attempts--;

  guessesDisplay.textContent = previousGuesses.join(', ');
  remainingDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    lowHighDisplay.textContent = `Congratulations! You guessed the right number: ${randomNumber}`;
    setGameOver();
  } else if (attempts === 0) {
    lowHighDisplay.textContent = `Game over! The number was: ${randomNumber}`;
    setGameOver();
  } else {
    if (userGuess < randomNumber) {
      lowHighDisplay.textContent = 'Too low! Try again.';
    } else {
      lowHighDisplay.textContent = 'Too high! Try again.';
    }
  }

  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  submitButton.disabled = true;
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Start New Game';
  resetButton.id = 'newGameButton'; // Add an ID for the new game button
  newGameContainer.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  attempts = 10;
  previousGuesses = [];
  guessField.disabled = false;
  submitButton.disabled = false;
  guessField.value = '';
  guessField.focus();

  guessesDisplay.textContent = '';
  remainingDisplay.textContent = attempts;
  lowHighDisplay.textContent = '';

  const resetButton = document.getElementById('newGameButton');
  newGameContainer.removeChild(resetButton);

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
