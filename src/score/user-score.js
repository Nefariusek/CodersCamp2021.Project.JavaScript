import './user.score.css';

export function renderScorePage() {
  renderPage();
  scoreLocalStorage();
  saveScoreBtn.addEventListener('click', saveHighScore);
}

function renderPage() {
  document.querySelector('#app').innerHTML = ` 
      <div class="container">
        <div id="end" class="">
          <h1 id="scoreTxt">CONGRATS! YOUR SCORE IS:</h1>
          <h1 id="finalScore"></h1>
          <form>
            <input type="text" id="username" placeholder="NICK" />
            <button type="submit" class="btn" id="saveScoreBtn" disabled>
              SUBMIT
            </button>
          </form>
          <button class="btn menuBtn" href="/">
            MENU
          </button>
          <button class="btn playAgain" href="/">
            PLAY AGAIN
          </button>
        </div>
     </div>
  `;
}

export function scoreLocalStorage() {
  const username = document.getElementById('username');
  const saveScoreBtn = document.getElementById('saveScoreBtn');

  username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
  });
}

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const recentUserScore = '12';

export function saveHighScore(e) {
  e.preventDefault();
  const finalScore = document.getElementById('finalScore');
  const input=document.getElementById('username');
  if (input.value!='' && input.value!='NICK'){
    finalScore.innerText = recentUserScore;
  const score = {
    score: recentUserScore,
    name: username.value,
  };
  highScores.push(score);
  localStorage.setItem('highScores', JSON.stringify(highScores));
  username.value = null;
  }
  

  
}
