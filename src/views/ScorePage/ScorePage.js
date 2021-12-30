import './ScorePage.css';
import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';

import { QuizSettings } from '../quiz-settings/quiz-settings';
import { userAnswers } from '../QuizView/quizView';
import Answer from '../../components/Answer/Answer';

export function renderScorePage() {
  const recentUserScore = getCurrentScore(userAnswers);
  const totalNumber = QuizSettings.questionsNum;
  const container = document.createElement('div');
  container.setAttribute('id', 'scorePage');
  container.append(
    renderGraphics(),
    renderScore(recentUserScore, totalNumber),
    renderNickForm(),
    renderMenuButton(),
    renderPlayAgainButton(),
  );
  document.querySelector('#app').append(container);
  renderCongratsMessage(recentUserScore, totalNumber);
}

function renderScore(score, totalNumber) {
  const container = document.createElement('div');
  const congratsText = document.createElement('h2');
  const scoreText = document.createElement('h2');
  const finalScore = document.createElement('h2');
  finalScore.setAttribute('id', 'finalScore');
  congratsText.innerText = 'CONGRATS!';
  scoreText.innerText = `YOUR SCORE IS: ${score}`;
  congratsText.setAttribute('id', 'congratsText');
  congratsText.innerText = '';
  scoreText.innerText = `YOUR SCORE IS:  ${score} / ${totalNumber}`;
  container.append(congratsText, scoreText, finalScore);
  return container;
}

function getCongratsMessage(recentUserScore, totalNumber) {
  let message;
  const totalPercent = Math.floor((recentUserScore / totalNumber) * 100);
  if (totalPercent >= 80) {
    message = `"WOW"! Your score is ${totalPercent}%! You are True animal lover!`;
  } else if (totalPercent >= 50) {
    message = `You could use a litte practice! Your score is ${totalPercent}% Would you like to do the quiz again?`;
  } else {
    message = `Well, it could be better! Your score is ${totalPercent}% Would you like to do the quiz again?`;
  }
  return message;
}

function renderCongratsMessage(recentUserScore, totalNumber) {
  const finalMessage = document.getElementById('congratsText');
  finalMessage.innerText = getCongratsMessage(recentUserScore, totalNumber);
}

function renderGraphics() {
  const img = document.createElement('img');
  img.src = './cat.png';
  img.setAttribute('id', 'catPNG');
  img.setAttribute('alt', 'Congrats!');
  img.setAttribute('width', '350');
  img.setAttribute('height', '350');
  return img;
}

function renderNickForm() {
  const nickFormContainer = document.createElement('div');
  nickFormContainer.setAttribute('id', 'nickFormDiv');
  const input = document.createElement('input');
  input.setAttribute('id', 'nickname');
  input.setAttribute('placeholder', 'Enter Nickname');
  input.setAttribute('type', 'text');
  input.setAttribute('style', 'text-transform: uppercase');
  nickFormContainer.append(input, Button('SUBMIT', 'saveScoreBtn', false, 'click', saveQuizScore));
  return nickFormContainer;
}

function getCurrentScore(Answers) {
  return Answers.reduce((sum, ans) => sum + ans.getScore(), 0);
}

function nicknameValidation() {
  const input = document.getElementById('nickname');
  if (input.value !== '' && input.value !== 'NICKNAME') {
    return true;
  }
  return false;
}

function saveQuizScore() {
  const quizScores = JSON.parse(localStorage.getItem('quizScores')) || [];
  const recentUserScore = getCurrentScore(userAnswers);
  if (!nicknameValidation()) {
    // eslint-disable-next-line no-alert
    alert('Type in your nickname!');
  } else {
    const score = {
      SCORE: recentUserScore,
      ABOUT: QuizSettings.quizAbout,
      NUMBER: QuizSettings.questionsNum,
      TYPE: QuizSettings.questionsType,
      NAME: document.getElementById('nickname').value,
    };
    quizScores.push(score);
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
    nickname.value = null;
  }
}

function renderMenuButton() {
  return Button('MENU', 'menuButton', false, 'click', goToMainPage);
}

function renderPlayAgainButton() {
  return Button('PLAY AGAIN', 'playAgainButton', false, 'click', playAgain);
}

function goToMainPage() {
  window.location.hash = '';
}

function playAgain() {
  window.location.hash = 'quiz-settings';
}
