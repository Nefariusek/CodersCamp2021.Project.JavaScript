import './Leaderboard.css';

import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';

import ScoreFilter from '../../components/ScoreFilter/ScoreFilter';

export function renderLeaderboard() {
  renderPodium();
  createMenuButton();
  renderResetBtn();
  getScoreFromLocalStorage();
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

function getScoreFromLocalStorage() {
  const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.sort((a, b) => b.SCORE - a.SCORE);
  console.log(scores);
  const highScores = scores.filter((score) => filterHighScores(score, 'CATS'));
  function showScore() {
    nick1.innerText = `${highScores[0].NAME} Pts:${highScores[0].SCORE}`;
    nick2.innerText = `${highScores[1].NAME} Pts:${highScores[1].SCORE}`;
    nick3.innerText = `${highScores[2].NAME} Pts:${highScores[2].SCORE}`;
    nick4.innerText = `${highScores[3].NAME} Pts:${highScores[3].SCORE}`;
    nick5.innerText = `${highScores[4].NAME} Pts:${highScores[4].SCORE}`;
    nick6.innerText = `${highScores[5].NAME} Pts:${highScores[5].SCORE}`;
    nick7.innerText = `${highScores[6].NAME} Pts:${highScores[6].SCORE}`;
    nick8.innerText = `${highScores[7].NAME} Pts:${highScores[7].SCORE}`;
    nick9.innerText = `${highScores[8].NAME} Pts:${highScores[8].SCORE}`;
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

function filterHighScores(item, about) {
  if (about === 'default') {
    return item;
  }
  return item.ABOUT === about;
}
