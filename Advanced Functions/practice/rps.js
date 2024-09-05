let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

updateGameScore();

function playGame(choice) {
  let computerMove = pickComputerMove();

  if (choice === "rock") {
    if (computerMove === "scissors") {
      score.Wins += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `You Win`;
    } else if (computerMove === "rock") {
      score.Ties += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `Game Tie`;
    } else {
      score.Losses += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `You Loose`;
    }
  } else if (choice === "paper") {
    if (computerMove === "scissors") {
      score.Losses += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `You Loose`;
    } else if (computerMove === "rock") {
      score.Wins += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `You Win`;
    } else {
      score.Ties += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `Game Tie`;
    }
  } else if (choice === "scissors") {
    if (computerMove === "scissors") {
      score.Ties += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `Game Tie`;
    } else if (computerMove === "rock") {
      score.Losses += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `You Loose`;
    } else {
      score.Wins += 1;
      let result = document.querySelector(".result");
      result.innerHTML = `You Win`;
    }
  }
  let choiceElement = document.querySelector(".choice");
  choiceElement.innerHTML = `You
  <img src="${choice}-emoji.png" alt="${choice}" style="width: 30px;">
  <img src="${computerMove}-emoji.png" alt="${computerMove}" style="width: 30px;">
  Computer
`;

  updateGameScore();
  // Save updated score to localStorage
  localStorage.setItem("score", JSON.stringify(score));
}

function updateGameScore() {
  let win = document.querySelector(".win");
  let loss = document.querySelector(".loss");
  let tie = document.querySelector(".tie");
  win.innerHTML = `Wins: ${score.Wins}`;
  loss.innerHTML = `Losses: ${score.Losses}`;
  tie.innerHTML = `Ties: ${score.Ties}`;
}

function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function reset() {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem("score");
  let choiceElement = document.querySelector(".choice");
  choiceElement.innerHTML = "";
  updateGameScore();
}
let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    let c = document.querySelector(".control");
    c.innerHTML = `Stop Auto Play`;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    let c = document.querySelector(".control");
    c.innerHTML = `Auto Play`;
  }
}
