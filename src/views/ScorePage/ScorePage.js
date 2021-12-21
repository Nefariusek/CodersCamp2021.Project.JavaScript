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
  congratsMessage();
}

function renderScore(score, totalNumber) {
  const container = document.createElement('div');
  const congratsText = document.createElement('h2');
  const scoreText = document.createElement('h2');
  const finalScore = document.createElement('h2');
  finalScore.setAttribute('id', 'finalScore');
  congratsText.setAttribute('id', 'congratsText');
  congratsText.innerText = '';
  scoreText.innerText = `YOUR SCORE IS:  ${score} / ${totalNumber}`;
  container.append(congratsText, scoreText, finalScore);
  return container;
}

function congratsMessage() {
  const recentUserScore = getCurrentScore(userAnswers);
  const totalNumber = QuizSettings.questionsNum;
  const finalMessage = document.getElementById('congratsText');
  const totalPercent = Math.floor((recentUserScore / totalNumber) * 100);
  if (totalPercent >= 80) {
    finalMessage.innerText = '"WOW"! Your score is ' + totalPercent + '%! You are True animal lover!';
  } else if (totalPercent >= 50) {
    finalMessage.innerText =
      'You could use a litte practice! Your score is ' + totalPercent + '% Would you like to do the quiz again?';
  } else {
    finalMessage.innerText =
      'Well, it could be better! Your score is ' + totalPercent + '% Would you like to do the quiz again?';
  }
  return finalMessage;
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
  input.setAttribute('value', 'NICKNAME');
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
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
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
    const highScore = {
      SCORE: recentUserScore,
      NAME: document.getElementById('nickname').value,
    };
    quizScores.push(score);
    highScores.push(highScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));
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
