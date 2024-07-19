let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".new-game");
let resetGame = document.querySelector(".reset-game");
let messageContainer = document.querySelector(".message");

let turn = true; // turns for x and o
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Event listener for each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// Function to check for a winner
const checkWinner = () => {
  for (const patterns of winPatterns) {
    let posOne = boxes[patterns[0]].innerText;
    let posTwo = boxes[patterns[1]].innerText;
    let posThree = boxes[patterns[2]].innerText;

    if (posOne != "" && posTwo != "" && posThree != "") {
      if (posOne === posTwo && posTwo === posThree) {
        showWinner(posOne);
        return true;
      }
    }
  }
  return false;
};

// Function to show the winner
const showWinner = (winner) => {
  messageContainer.innerText = `Congratulations, Winner is ${winner}`;
  messageContainer.classList.add("message");
  disableBoxes();
};

// Function to handle a draw game
const gameDraw = () => {
  messageContainer.innerText = "It's a draw!";
  messageContainer.classList.add("message");
  disableBoxes();
};

// Function to disable all boxes
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// Function to reset the game state
const resetGameState = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turn = true;
  count = 0;
  messageContainer.innerText = "";
  messageContainer.classList.remove("message");
};

// Event listener for the new game button
newGame.addEventListener("click", () => {
  resetGameState();
});

// Event listener for the reset game button
resetGame.addEventListener("click", () => {
  resetGameState();
});

// Initial setup
resetGameState();
