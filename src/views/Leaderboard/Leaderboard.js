import './Leaderboard.css';
import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';

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
}

function getScoreFromLocalStorage() {
  const highScores = JSON.parse(localStorage.getItem('quizScores')) || [];
  highScores.sort((a, b) => b.SCORE - a.SCORE);
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
