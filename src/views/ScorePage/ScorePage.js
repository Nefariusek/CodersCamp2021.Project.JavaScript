import './ScorePage.css';
import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';

import { QuizSettings } from '../quiz-settings/quiz-settings';
import { userAnswers } from '../QuizView/quizView';
import Answer from '../../components/Answer/Answer';

export function renderScorePage() {
  const recentUserScore = getCurrentScore(userAnswers);

  const container = document.createElement('div');
  container.setAttribute('id', 'scorePage');
  container.append(
    renderGraphics(),
    renderScore(recentUserScore),
    renderNickForm(),
    renderMenuButton(),
    renderPlayAgainButton(),
  );
  document.querySelector('#app').append(container);
}

function renderScore(score) {
  const container = document.createElement('div');
  const congratsText = document.createElement('h2');
  const scoreText = document.createElement('h2');
  const finalScore = document.createElement('h2');
  finalScore.setAttribute('id', 'finalScore');
  congratsText.innerText = 'CONGRATS!';
  scoreText.innerText = 'YOUR SCORE IS: ' + score;
  container.append(congratsText, scoreText, finalScore);
  return container;
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
  input.setAttribute('placeholder', 'NICK');
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
  if (input.value != '' && input.value != 'NICKNAME') {
    return true;
  } else {
    return false;
  }
}

function saveQuizScore() {
  const quizScores = JSON.parse(localStorage.getItem('quizScores')) || [];
  const recentUserScore = getCurrentScore(userAnswers);
  if (!nicknameValidation()) {
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
