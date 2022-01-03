export default function getScoreFromLocalStorage() {
  const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.sort((a, b) => b.SCORE - a.SCORE);
  return scores;
}

/* function filterHighScores(item, about) {
  if (about === 'default') {
    return item;
  }
  return item.ABOUT === about;
}
*/
