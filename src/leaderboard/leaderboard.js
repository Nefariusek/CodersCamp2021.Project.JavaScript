import './leaderboard.css';

export function renderLeaderboard() {
  podium();
}

function podium() {
  document.querySelector('#app').innerHTML = ` 

  <div id="scorePage">
  <h1 id = "scorePageTitle">LEADERBOARD<h1>
  <div class="podium">
    <table id="ladder">
      <tr>
        <td class = "step" ><input class = "nick" id="nickname2"></input></td>
        <td class = "step"><input class = "nick" id="nickname1"></input></td>
        <td class = "step"><input class= "nick" id="nickname3"></input></td>
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
      <li><input class="listItem"></input></li>
      <li><input class="listItem"></input></li>
      <li><input class="listItem"></input></li>
    </ol>

    <ol start ="7" id="list2">
      <li><input class="listItem"></input></li>
      <li><input class="listItem"></input></li>
      <li><input class="listItem"></input></li>
    </ol>
  </div>
 </div> 
  `;
}
