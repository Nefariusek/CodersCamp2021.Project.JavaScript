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
        <td class = "step" ><p class = "nick" id="nick2">nick</p></td>
        <td class = "step"><p class = "nick" id="nick1">nick</p></td>
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
