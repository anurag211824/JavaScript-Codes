const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      "Harper Lee",
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    correct: 0,
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correct: 3,
  },
  {
    question: "What is the smallest prime number?",
    answers: ["1", "2", "3", "5"],
    correct: 1,
  },
];

let questionIndex = 0;
let score = 0;
loadQuiz(questionIndex);

function loadQuiz(questionIndex) {
  let i = questionIndex;
  const questionField = document.querySelector(".question");
  questionField.innerHTML= quizQuestions[i].question;

  const option1 = document.querySelector(".option1");
  const option2 = document.querySelector(".option2");
  const option3 = document.querySelector(".option3");
  const option4 = document.querySelector(".option4");

  option1.textContent = quizQuestions[i].answers[0];
  option2.textContent = quizQuestions[i].answers[1];
  option3.textContent = quizQuestions[i].answers[2];
  option4.textContent = quizQuestions[i].answers[3];
}
function getSelectedIndex() {
  let selectedIndex;
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function (radio, index) {
    if (radio.checked == true) {
      selectedIndex = index;
    }
  });
  return selectedIndex;
}
function scoreCalculator() {
  let selectedIndex = getSelectedIndex();
  console.log(selectedIndex);
  if (quizQuestions[questionIndex].correct == selectedIndex) {
    score++;
    console.log(score);
  } else {
    console.log(score);
  }
}
function optionClearing() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function (radio) {
    radio.checked = false;
  });
}
function optionSelected() {
  let flag = false;
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function (radio) {
    if (radio.checked == true) {
      flag = true;
    }
  });
  return flag;
}
let submitbtn = document.querySelector(".submitbtn");
submitbtn.addEventListener("click", () => {
  scoreCalculator();
  questionIndex++;
  if(questionIndex==quizQuestions.length){
    alert(`Your score is ${score}/${quizQuestions.length}`);
    return;
}
  if (optionSelected()) {
    loadQuiz(questionIndex);
  }
  optionClearing();
});
