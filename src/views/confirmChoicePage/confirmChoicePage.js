import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';
import './confirmChoicePage.css';
import Answers from '../QuizView/quizView';

export function renderChoicePage() {
  console.log(Answers);
  const choicePage = document.createElement('div');
  choicePage.setAttribute('id', 'choicePage');
  choicePage.append(renderQuestion(), renderInfo());
  document.querySelector('#app').append(choicePage);
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
  document.getElementById('choicePage').append(buttons);
}

function renderInfo() {
  const info = document.createElement('h3');
  info.setAttribute('id', 'infoText');
  for (let i = 0; i < Answers.length; i++) {
    if (Answers[i].answer === '') {
      info.innerText = 'There are unanswered questions.';
      break;
    }
  }
  return info;
}

function navigateToScorePage() {
  window.location.hash = 'score-page';
}

function navigateBackToQuiz() {
  window.location.hash = 'quiz';
}

function renderYesButton() {
  return Button('YES', 'yesButton', null, 'click', navigateToScorePage);
}

function renderNoButton() {
  return Button('NO', 'noButton', null, 'click', navigateBackToQuiz);
}
