import { QuizSettings } from '../quiz-settings/quiz-settings';
import { createTimer, startTimer } from '../../components/QuizTimer/QuizTimer';
import { getRandomQuizQuestions } from '../../model/randomizer';
import { renderChoiceModal } from '../confirmChoiceModal/confirmChoiceModal';
import Button from '../../components/Button/Button';
import Answer from '../../model/Answer';
import timeManager from '../../model/TimeManager';

let questions;
let current;
let startTime;
let endTime;
export let userAnswers = [];

export async function renderQuizView() {
  questions = await getRandomQuizQuestions(QuizSettings.quizAbout.toUpperCase(), QuizSettings.questionsNum);
  current = 0;
  userAnswers = [];
  document.querySelector('#app').append(createLayout());
  questions.forEach((q, idx) => userAnswers.push(new Answer(idx, 0, q, '', false, false)));
  startTimer();
  renderQuizData();
}

function createQuestionNumbers() {
  const circles = document.createElement('div');
  circles.setAttribute('id', 'question-numbers');
  circles.onclick = function click(e) {
    selectQuestion(parseFloat(e.target.innerText));
  };
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

function createMenuButton() {
  const menuButton = Button('MENU', 'quizViewMenuButton', null, 'click', navigateToMenu);
  return menuButton;
}

function navigateToMenu() {
  window.location.hash = '';
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
    createMenuButton(),
  );

  return container;
}

function renderQuizData() {
  if (current === QuizSettings.questionsNum) {
    renderChoiceModal();
  }
  current = current < 0 ? 0 : current;
  current = current === QuizSettings.questionsNum ? current - 1 : current;
  const numbers = document.getElementById('question-numbers').children;
  numbers.item(current).setAttribute('id', 'current-question');
  const image = document.querySelector('#quizView > img');
  image.src = userAnswers[current].question.imageUrl;

  const question = document.getElementById('question-text');
  question.innerText = userAnswers[current].question.question.toUpperCase();

  const answersContainer = document.getElementById('answers');
  const answers = userAnswers[current].question.getAnswers();

  for (let i = 0; i < answers.length; i++) {
    const answerBtn = Button(answers[i], 'answer', false, 'click', nextQuestion);
    if (answers[i].toUpperCase() === userAnswers[current].answer) {
      answerBtn.classList.add('selected');
    }
    answersContainer.appendChild(answerBtn);
  }
  startTime = getTime();
}

function getTime() {
  return timeManager.minutes * 60 + timeManager.seconds;
}

function saveAnswer(answer) {
  endTime = getTime();
  const relativeTime = endTime - startTime;

  const currentAnswer = userAnswers.find((ans) => current === ans.index);
  currentAnswer.timeOfAnswer = relativeTime;
  currentAnswer.changed = currentAnswer.answer && currentAnswer.answer !== answer;
  currentAnswer.answer = answer;
}

function addAnsweredClass() {
  const currentQuestionNumber = document.getElementById('current-question');
  currentQuestionNumber.setAttribute('class', 'answered');
}

function nextQuestion(e) {
  const buttonValue = e.target.innerText;
  saveAnswer(buttonValue);

  if (userAnswers[current].answer) {
    addAnsweredClass();
  }

  clearCurrentQuestionId();
  clearAnswerContainer();

  current++;
  renderQuizData();
}

function previousQuestion() {
  if (userAnswers[current].answer) {
    addAnsweredClass();
  }

  clearCurrentQuestionId();
  clearAnswerContainer();

  current--;
  renderQuizData();
}

function clearCurrentQuestionId() {
  const currentQuestionNumber = document.getElementById('current-question');
  currentQuestionNumber.removeAttribute('id');
}

function clearAnswerContainer() {
  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';
}

function selectQuestion(selectedNumber) {
  if (userAnswers[current].answer) {
    addAnsweredClass();
  }

  clearCurrentQuestionId();
  clearAnswerContainer();

  current = selectedNumber - 1;
  renderQuizData();
}

function useLifeline() {
  const lifelineDiv = document.getElementById('lifeline');
  lifelineDiv.innerHTML = '';

  const answersContainer = document.getElementById('answers');
  const answers = answersContainer.children;
  let removed = 0;
  let n;
  while (removed < 2) {
    n = Math.floor(Math.random() * answers.length);
    if (questions[current].correct.toUpperCase() !== answers[n].children[0].innerText) {
      const index = questions[current].incorrectAnswers
        .map((ans) => ans.toUpperCase())
        .indexOf(answers[n].children[0].innerText);
      questions[current].incorrectAnswers.splice(index, 1);
      answersContainer.removeChild(answers[n]);
      removed++;
    }
  }
}
