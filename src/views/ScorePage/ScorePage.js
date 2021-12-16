import './ScorePage.css';

import { scoreLocalStorage, saveHighScore } from '../../score/user-score.js';
import Button from '../../components/Button/Button.js';
import '../../components/Button/Button.css';

export function renderScorePage() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const recentUserScore = 12;
  const questionsNumber = 12;

  const container = document.createElement('div');
  container.setAttribute('id', 'scorePage');
  container.append(
    renderGraphics(),
    renderScore(recentUserScore, questionsNumber),
    renderNickForm(),
    renderMenuButton(),
    renderPlayAgainButton(),
  );
  document.querySelector('#app').append(container);
}

function renderScore(score, questionsNumber) {
  const container = document.createElement('div');
  const congratsText = document.createElement('h2');
  const scoreText = document.createElement('h2');
  const finalScore = document.createElement('h2');
  finalScore.setAttribute('id', 'finalScore');
  congratsText.innerText = 'CONGRATS!';
  scoreText.innerText = 'YOUR SCORE IS: ';
  container.append(congratsText, scoreText, finalScore);
  return container;
}

function renderGraphics() {
  const img = document.createElement('img');
  img.src = './cat.png';
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
  input.setAttribute('value', 'NICKNAME');
  nickFormContainer.append(input, Button('SUBMIT', 'saveScoreBtn', false, 'click', saveNickname));
  return nickFormContainer;
}

function saveNickname() {
  const saveButton = document.getElementsByClassName('saveScoreBtn')[0];
  saveButton.addEventListener('click', saveHighScore);
  if (!nicknameValidation()) {
    alert('Type in your nickname!');
  }
}

function nicknameValidation() {
  const input = document.getElementById('nickname');
  if (input.value != '' && input.value != 'NICKNAME') {
    return true;
  } else {
    return false;
  }
}

function renderMenuButton() {
  return Button('MENU', 'menuButton', false, 'click', goToMainPage);
}

function renderPlayAgainButton() {
  return Button('PLAY AGAIN', 'playAgainButton', false, 'click', playAgain);
}

function goToMainPage() {
  console.log('Go to main page!');
  window.location.hash = '';
}

function playAgain() {
  window.location.hash = 'quiz-settings';
}