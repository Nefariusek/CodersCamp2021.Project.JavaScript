import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';
import './confirmChoiceModal.css';
import { userAnswers } from '../QuizView/quizView';
import { stopTimer } from '../../components/QuizTimer/QuizTimer';

export function renderChoiceModal() {
  const choiceModal = document.createElement('div');
  choiceModal.setAttribute('id', 'choiceModal');
  choiceModal.append(renderQuestion(), renderInfo());
  document.querySelector('#app').append(choiceModal);
  renderButtons();
}

function renderQuestion() {
  const question = document.createElement('h2');
  question.innerText = 'Are you sure you want to finish the quiz?';
  return question;
}

function renderButtons() {
  const buttons = document.createElement('div');
  buttons.setAttribute('id', 'buttons');
  buttons.append(renderYesButton(), renderNoButton());
  document.getElementById('choiceModal').append(buttons);
}

function renderInfo() {
  const info = document.createElement('h3');
  info.setAttribute('id', 'infoText');
  userAnswers.forEach((answer) => {
    if (answer.answer === '') {
      info.innerText = 'There are unanswered questions.';
    }
  });
  return info;
}

function finishQuiz() {
  stopTimer();
  window.location.hash = 'score-page';
}

function renderYesButton() {
  return Button('YES', 'yesButton', null, 'click', finishQuiz);
}

function renderNoButton() {
  return Button('NO', 'noButton', null, 'click', closeModal);
}

function closeModal() {
  const choiceModal = document.getElementById('choiceModal');
  document.querySelector('#app').removeChild(choiceModal);
}
