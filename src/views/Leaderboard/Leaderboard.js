import './Leaderboard.css';

import Button from '../../components/Button/Button';
import '../../components/Button/Button.css';

export function renderLeaderboard() {
  renderPodium();
  getScoreFromLocalStorage();
  renderMenuBtn();
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
  
 </div> 
  `;
}

function getScoreFromLocalStorage() {
  const highScores = JSON.parse(localStorage.getItem('quizScores')) || [];
  highScores.sort((a, b) => b.score - a.score);
  function showScore() {
    nick1.innerText = `pts: ${Object.values(highScores[0])}`;
    nick2.innerText = `pts: ${Object.values(highScores[1])}`;
    nick3.innerText = `pts: ${Object.values(highScores[2])}`;
    nick4.innerText = Object.values(highScores[3]);
    nick5.innerText = Object.values(highScores[4]);
    nick6.innerText = Object.values(highScores[5]);
    nick7.innerText = Object.values(highScores[6]);
    nick8.innerText = Object.values(highScores[7]);
    nick9.innerText = Object.values(highScores[8]);
  }
  return showScore();
}

// klawisz funkcyjny powrót do Menu
const handleNavigationButtonClick = (e) => onNavigationChange(e);

function renderMenuBtn() {
  const menuButton = document.getElementById('mainMenu');
  menuButton.append(Button('MENU', 'menuButton', false, 'click', handleNavigationButtonClick));
}

function onNavigationChange(e) {
  window.location.hash = e.target.className;
}
