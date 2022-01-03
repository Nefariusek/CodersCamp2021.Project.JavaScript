import './Leaderboard.css';
import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';

import ScoreFilter from '../../model/ScoreFilter';

export function renderLeaderboard() {
  renderPodium();
  createMenuButton();
  renderResetBtn();
  renderScores(getScoreFromLocalStorage());
}

function renderPodium() {
  document.querySelector('#app').innerHTML = ` 

  <div id="scorePage">
  <h1 id = "scorePageTitle">LEADERBOARD<h1>
  <div class='filter'>
  </div>
  <div class="podium">
    <table id="ladder">
      <tr>
        <td class = "onStep" ><div class = "podiumNickname" id="nickname2"></div></td>
        <td class = "onStep"><div class = "podiumNickname" id="nickname1"></div></td>
        <td class = "onStep"><div class= "podiumNickname" id="nickname3"></div></td>
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
      <li><p class="listItem" id="nickname4"></p></li>
      <li><p class="listItem" id="nickname5" ></p></li>
      <li><p class="listItem" id="nickname6"></p></li>
    </ol>

    <ol start ="7" id="list2">
      <li><p class="listItem" id="nickname7"></p></li>
      <li><p class="listItem" id="nickname8"></p></li>
      <li><p class="listItem" id="nickname9"></p></li>
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

export function renderScores(highScores) {
  for (let i = 0; i < 9; i++) {
    const nicknameContainer = document.getElementById(`nickname${i + 1}`);
    if (highScores[i]) {
      nicknameContainer.innerText = `${highScores[i].NAME} Pts:${highScores[i].SCORE}`;
    } else {
      nicknameContainer.innerText = '-';
    }
  }
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

export function getScoreFromLocalStorage() {
  const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.sort((a, b) => b.SCORE - a.SCORE);

  return scores;
}
