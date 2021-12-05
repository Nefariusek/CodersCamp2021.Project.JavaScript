const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});

const recentUserScore = '90';
const finalScore = document.getElementById('finalScore');
finalScore.innerText = recentUserScore;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);

saveHighScore = (e) => {
  console.log('clikedItem');
  e.preventDefault();

  const score = {
    score: recentUserScore,
    name: username.value,
  };

  highScores.push(score);
  console.log(highScores);
  localStorage.setItem('highScores', JSON.stringify(highScores));
};
