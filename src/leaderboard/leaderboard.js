import './leaderboard.css';

export function renderLeaderboard() {
  podium();
  localScores();
}

function podium() {
  document.querySelector('#app').innerHTML = ` 

  <div id="scorePage">
  <h1 id = "scorePageTitle">LEADERBOARD<h1>
  <div class="podium">
    <table id="ladder">
      <tr>
        <td class = "step" ><p class = "nick" id="nick2">nick</p></td>
        <td class = "step"><p class = "nick" id="nick1"></p></td>
        <td class = "step"><p class= "nick" id="nick3">nick</p></td>
      </tr>
      <tr>
      <td class = "step"><div id="podium2">2</div></td>
      <td class = "step"><div id="podium1">1</div></td>
      <td class = "step"><div id="podium3">3</div></td>
      </tr>
    </table>
  </div>

  <div class="list">
    <ol start="4" id = "list1">
      <li><p class="listItem" id="nick4">nick</p></li>
      <li><p class="listItem" id="nick5" >nick</p></li>
      <li><p class="listItem" id="nick6">nick</p></li>
    </ol>

    <ol start ="7" id="list2">
      <li><p class="listItem" id="nick7">nick</p></li>
      <li><p class="listItem" id="nick8">nick</p></li>
      <li><p class="listItem" id="nick9">nick</p></li>
    </ol>
  </div>
 </div> 
  `;
}

function localScores() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const highScoresList = document.getElementById('highScoresList');

  nick1.innerText = Object.values(highScores[0]);
  nick2.innerText = Object.values(highScores[1]);
  nick3.innerText = Object.values(highScores[2]);
  nick4.innerText = Object.values(highScores[3]);
  nick5.innerText = Object.values(highScores[4]);
  nick6.innerText = Object.values(highScores[5]);
  nick7.innerText = Object.values(highScores[6]);
  nick8.innerText = Object.values(highScores[7]);
  nick9.innerText = Object.values(highScores[8]);

  // for (let value of Object.values(highScores[0])) {
  //   nick1.innerText = value;
  // }
  // for (let value of Object.values(highScores[1])) {
  //   nick2.innerText = value;
  // }
  // for (let value of Object.values(highScores[2])) {
  //   nick3.innerText = value;
  // }
  // for (let value of Object.values(highScores[3])) {
  //   nick4.innerText = value;
  // }
  // for (let value of Object.values(highScores[4])) {
  //   nick5.innerText = value;
  // }
  // for (let value of Object.values(highScores[5])) {
  //   nick6.innerText = value;
  // }
  // for (let value of Object.values(highScores[6])) {
  //   nick7.innerText = value;
  // }
  // for (let value of Object.values(highScores[7])) {
  //   nick8.innerText = value;
  // }
  // for (let value of Object.values(highScores[8])) {
  //   nick9.innerText = value;
  // }
}
