export function scoreLocalStorage() {
  const nickname = document.getElementById('nickname');
  const saveScoreBtn = document.getElementById('saveScoreBtn');

  nickname.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !nickname.value;
  });
}

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const recentUserScore = '12';

export function saveHighScore(e) {
  e.preventDefault();
  const finalScore = document.getElementById('finalScore');
  const input = document.getElementById('nickname');
  if (input.value != '' && input.value != 'NICKNAME') {
    finalScore.innerText = recentUserScore;
    const score = {
      score: recentUserScore,
      name: nickname.value,
    };
    highScores.push(score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    nickname.value = null;
  }
}
