const questions = [
  {
    question: "What is JavaScript?",
    options: ["A programming language computer", "A type of food", "A type of plant"],
    correctAnswer: 0,
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let timeRemaining = 60; // Initial time, adjust as needed
let score = 0;

document.getElementById('start-btn').addEventListener('click', startQuiz);

function startQuiz() {
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('questions').classList.remove('hide');
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const questionTitle = document.getElementById('question-title');
  const optionsContainer = document.getElementById('options-container');
  const currentQuestion = questions[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });
}