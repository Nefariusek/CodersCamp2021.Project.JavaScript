import './Leaderboard.css';
import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';

import ScoreFilter from '../../components/ScoreFilter/ScoreFilter';

export function renderLeaderboard() {
  renderPodium();
  createMenuButton();
  renderResetBtn();
  renderScores();
}

let nick1;
let nick2;
let nick3;
let nick4;
let nick5;
let nick6;
let nick7;
let nick8;
let nick9;

function renderPodium() {
  document.querySelector('#app').innerHTML = ` 

  <div id="scorePage">
  <h1 id = "scorePageTitle">LEADERBOARD<h1>
  <div class='filter'>
  </div>
  <div class="podium">
    <table id="ladder">
      <tr>
        <td class = "onStep" ><div class = "podiumNick" id="nick2"></div></td>
        <td class = "onStep"><div class = "podiumNick" id="nick1"></div></td>
        <td class = "onStep"><div class= "podiumNick" id="nick3"></div></td>
      </tr>
      <tr>
      <td class = "step"><div id="silver">2</div></td>
      <td class = "step"><div id="gold">1</div></td>
      <td class = "step"><div id="bronze">3</div></td>
      </tr>
    </table>
  </div>

  <div class="list">
    <ol start="4" id = "list1">
      <li><p class="listItem" id="nick4"></p></li>
      <li><p class="listItem" id="nick5" ></p></li>
      <li><p class="listItem" id="nick6"></p></li>
    </ol>

    <ol start ="7" id="list2">
      <li><p class="listItem" id="nick7"></p></li>
      <li><p class="listItem" id="nick8"></p></li>
      <li><p class="listItem" id="nick9"></p></li>
    </ol>
  </div>
  <div id="mainMenu">
  </div>
  <div id="resetButton">
  </div>
  
 </div> 
  `;
  const filter = document.querySelector('.filter');
  const scorefilter = ScoreFilter();
  filter.append(scorefilter);
}

function renderScores() {
  /* const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.sort((a, b) => b.SCORE - a.SCORE);
  const highScores = scores.filter((score) => filterHighScores(score, 'CATS')); */
  const highScores = getScoreFromLocalStorage();
  function showScore() {
    for (let i = 1; i <= highScores.length; i++) {
      if (i > 9) {
        break;
      }
      const nick = `nick${i}`;
      document.getElementById(nick).innerText = `${highScores[i - 1].NAME} Pts:${highScores[i - 1].SCORE}`;
    }
  }
  return showScore();
}

function createMenuButton() {
  const menuButton = Button('MENU', 'leaderboardMenuButton', null, 'click', navigateToMenu);
  document.querySelector('#app').append(menuButton);
}

function navigateToMenu() {
  window.location.hash = '';
}

function resetLocalStorage() {
  localStorage.removeItem('quizScores');
  renderLeaderboard();
}

function renderResetBtn() {
  const resetButton = document.getElementById('resetButton');
  resetButton.append(Button('RESET SCORE', 'resetButton', false, 'click', resetLocalStorage));
}

function getScoreFromLocalStorage() {
  const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.sort((a, b) => b.SCORE - a.SCORE);
  return scores;
}

/*

function filterHighScores(item, about) {
  if (about === 'default') {
    return item;
  }
  return item.ABOUT === about;
}

*/
