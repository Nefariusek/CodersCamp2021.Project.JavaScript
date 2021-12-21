import { QuizSettings } from '../quiz-settings/quiz-settings';
import { createTimer, startTimer, stopTimer } from '../../components/timer/quiz-timer';
import { getRandomQuizQuestions } from '../../model/randomizer.js';
import Button from '../../components/Button/Button';
import Answer from '../../components/Answer/Answer';

let questions;
let current;
let startTime;
let endTime;
let timerMinutes;
let timerSeconds;
let lifeline = false;
export let userAnswers = [];

export async function renderQuizView() {
  questions = await getRandomQuizQuestions(QuizSettings.quizAbout.toUpperCase(), QuizSettings.questionsNum);
  current = 0;
  userAnswers = [];
  document.querySelector('#app').append(createLayout());
  startTimer();
  renderQuizData();
}

function createQuestionNumbers() {
  const circles = document.createElement('div');
  circles.setAttribute('id', 'question-numbers');
  for (let i = 0; i < QuizSettings.questionsNum; i++) {
    const number = document.createElement('div');
    number.innerText = i + 1;
    circles.appendChild(number);
  }
  return circles;
}

function createRightArrow() {
  const rightArrow = document.createElement('div');
  rightArrow.setAttribute('id', 'navigation-arrows-right');
  const rightArrowImage = document.createElement('img');
  rightArrowImage.src = './rightarrow.png';
  rightArrow.appendChild(rightArrowImage);
  rightArrowImage.addEventListener('click', nextQuestion);
  return rightArrow;
}

function createLeftArrow() {
  const leftArrow = document.createElement('div');
  leftArrow.setAttribute('id', 'navigation-arrows-left');
  const leftArrowImage = document.createElement('img');
  leftArrowImage.src = './leftarrow.png';
  leftArrow.appendChild(leftArrowImage);
  leftArrowImage.addEventListener('click', previousQuestion);
  return leftArrow;
}

function createLifeline() {
  const lifelineContainer = document.createElement('div');
  lifelineContainer.setAttribute('id', 'lifeline');
  const lifelineImage = document.createElement('img');
  lifelineImage.src = './lifering.png';
  lifelineContainer.appendChild(lifelineImage);
  lifelineImage.addEventListener('click', useLifeline);
  return lifelineContainer;
}

function createLayout() {
  const container = document.createElement('div');
  container.setAttribute('id', 'quizView');

  const header = document.createElement('h1');
  header.innerText = 'LIVE QUIZ';

  const image = document.createElement('img');

  const question = document.createElement('div');
  question.setAttribute('id', 'question-text');

  const answers = document.createElement('div');
  answers.setAttribute('id', 'answers');

  container.append(
    header,
    createLifeline(),
    createQuestionNumbers(),
    image,
    createTimer(),
    question,
    createRightArrow(),
    createLeftArrow(),
    answers,
  );

  return container;
}

function renderQuizData() {
  if (current === QuizSettings.questionsNum) {
    window.location.hash = 'score-page';
    return;
  }
  current = current < 0 ? 0 : current;
  const numbers = document.getElementById('question-numbers').children;
  numbers.item(current).setAttribute('id', 'current-question');

  const image = document.querySelector('#quizView > img');
  image.src = questions[current].imageUrl;

  const question = document.getElementById('question-text');
  question.innerText = questions[current].question.toUpperCase();

  const answersContainer = document.getElementById('answers');
  const answers = questions[current].getAnswers();
  for (let i = 0; i < 4; i++) {
    answersContainer.appendChild(Button(answers[i], 'answer', false, 'click', nextQuestion));
  }
  startTime = getTime();
}

function getTime() {
  timerMinutes = document.getElementById('timer-minutes').innerText;
  timerSeconds = document.getElementById('timer-seconds').innerText;
  const time = timerMinutes * 60 + timerSeconds;
  return time;
}

function saveAnswer(answer) {
  endTime = getTime();
  const relativeTime = endTime - startTime;
  const ans = new Answer(relativeTime, questions[current], answer, lifeline);
  userAnswers.push(ans);
}

function nextQuestion(e) {
  let buttonValue = e.target.innerText;
  saveAnswer(buttonValue);

  const currentQuestionNumber = document.getElementById('current-question');
  currentQuestionNumber.setAttribute('id', '');

  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';

  current++;
  lifeline = false;
  renderQuizData();
}

function previousQuestion() {
  const currentQuestionNumber = document.getElementById('current-question');
  currentQuestionNumber.setAttribute('id', '');

  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';

  current--;
  renderQuizData();
}

function useLifeline() {
  lifeline = true;
  const lifelineDiv = document.getElementById('lifeline');
  lifelineDiv.innerHTML = '';

  const answersContainer = document.getElementById('answers');
  const answers = answersContainer.children;
  let removed = 0;
  let n;
  while (removed < 2) {
    n = Math.floor(Math.random() * answers.length);
    if (questions[current].correct.toUpperCase() != answers[n].children[0].innerText) {
      answersContainer.removeChild(answers[n]);
      removed++;
    }
  }
}
