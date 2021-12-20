import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';
import './confirmChoicePage.css';
import Answers from '../QuizView/quizView';

export function renderChoicePage() {
  const choicePage = document.createElement('div');
  choicePage.setAttribute('id', 'choicePage');
  choicePage.append(renderQuestion(), renderInfo(), renderYesButton(), renderNoButton());
  document.querySelector('#app').append(choicePage);
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
  console.log(Answers);
  for (let i = 0; i < Answers.length; i++) {
    if (Answers[i].answer === '') {
      info.innerText = 'There are unanswered questions.';
      break;
    }
  }
  return info;
}

function navigateToScorePage() {
  console.log('działam');
  window.location.hash = 'score-page';
}

function navigateBackToQuiz() {
  console.log('działam');
  window.location.hash = 'quiz';
}

function renderYesButton() {
  return Button('YES', 'yesButton', null, navigateToScorePage);
}

function renderNoButton() {
  return Button('NO', 'noButton', null, navigateBackToQuiz);
}
