const questions = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "6", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
      ]
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        { text: "Harper Lee", correct: true },
        { text: "J.K. Rowling", correct: false },
        { text: "Stephen King", correct: false },
        { text: "Mark Twain", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "H2O", correct: true },
        { text: "CO2", correct: false },
        { text: "O2", correct: false },
        { text: "H2SO4", correct: false }
      ]
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Claude Monet", correct: false }
      ]
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "India", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false }
      ]
    },
    {
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "African Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false }
      ]
    },
    {
      question: "Which of the following is a prime number?",
      answers: [
        { text: "15", correct: false },
        { text: "21", correct: false },
        { text: "31", correct: true },
        { text: "42", correct: false }
      ]
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: [
        { text: "K2", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Kangchenjunga", correct: false },
        { text: "Makalu", correct: false }
      ]
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "George Orwell", correct: false }
      ]
    }
  ];
  
  
  const questionContainer = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answer-buttons');
  const scoreElement = document.getElementById('score-value');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  startQuiz();
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
    updateScore();
  }
  
  function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    clearStatusClass(document.body);
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
      setStatusClass(button, button.dataset.correct === 'true');
    });
    if (correct) {
      score++;
      updateScore();
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setNextQuestion();
    } else {
      endQuiz();
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('green');
    } else {
      element.classList.add('red');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('green');
    element.classList.remove('red');
  }
  
  function updateScore() {
    scoreElement.textContent = score;
  }
  
  function endQuiz() {
    resetState();
    questionElement.innerText = "Quiz completed! Your score is: " + score + "/" + questions.length;
  }
  