import { QuizSettings } from '../quiz-settings/quiz-settings';
import { createTimer, startTimer, stopTimer } from '../../components/timer/quiz-timer';
import { getQuizQuestions } from '../../api/getQuizQuestions';
import Button from '../../components/Button/Button';

let questions;
let current;

export async function renderQuizView() {
  questions = await getQuizQuestions(QuizSettings.quizAbout, QuizSettings.questionsNum);
  current = 0;
  document.querySelector('#app').append(createLayout());
  startTimer();
  renderQuizData();
}

function createLayout() {
  const container = document.createElement('div');
  container.setAttribute('id', 'quizView');

  const header = document.createElement('h1');
  header.innerText = 'LIVE QUIZ';

  const circles = document.createElement('div');
  circles.setAttribute('id', 'question-numbers');
  for (let i = 0; i < QuizSettings.questionsNum; i++) {
    const number = document.createElement('div');
    number.innerText = i + 1;
    circles.appendChild(number);
  }

  const image = document.createElement('img');

  const question = document.createElement('div');
  question.setAttribute('id', 'question-text');

  const right_arrow = document.createElement('div');
  right_arrow.setAttribute('id', 'navigation-arrows-right');
  const right_arrow_image = document.createElement('img');
  right_arrow_image.src = './rightarrow.png';
  right_arrow.appendChild(right_arrow_image);
  right_arrow_image.addEventListener('click', nextQuestion);

  const left_arrow = document.createElement('div');
  left_arrow.setAttribute('id', 'navigation-arrows-left');
  const left_arrow_image = document.createElement('img');
  left_arrow_image.src = './leftarrow.png';
  left_arrow.appendChild(left_arrow_image);
  left_arrow_image.addEventListener('click', previousQuestion);

  const answers = document.createElement('div');
  answers.setAttribute('id', 'answers');

  container.append(header, circles, image, createTimer(), question, right_arrow, left_arrow, answers);
  return container;
}

function renderQuizData() {
  if (current == QuizSettings.questionsNum) {
    window.location.hash = 'score-page';
    return;
  }
  current = current < 0 ? 0 : current;
  const numbers = document.getElementById('question-numbers').children;
  numbers.item(current).setAttribute('id', 'current-question');

  const image = document.querySelector('img');
  image.src = questions[current].imageUrl;

  const question = document.getElementById('question-text');
  question.innerText = questions[current].question.toUpperCase();

  const answers_container = document.getElementById('answers');
  const answers = questions[current].getAnswers();
  for (let i = 0; i < 4; i++) {
    answers_container.appendChild(Button(answers[i], 'answer', false, 'click', nextQuestion));
  }
}

function nextQuestion() {
  const current_question_number = document.getElementById('current-question');
  current_question_number.setAttribute('id', '');

  const answers_container = document.getElementById('answers');
  answers_container.innerHTML = '';

  current++;
  renderQuizData();
}

function previousQuestion() {
  const current_question_number = document.getElementById('current-question');
  current_question_number.setAttribute('id', '');

  const answers_container = document.getElementById('answers');
  answers_container.innerHTML = '';

  current--;
  renderQuizData();
}
