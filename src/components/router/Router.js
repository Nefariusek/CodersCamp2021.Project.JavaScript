import { renderMainPage } from '../../views/MainPage/MainPage.js';
import { renderQuizSettings } from '../../views/quiz-settings/quiz-settings.js';
import { renderQuizView } from '../../views/QuizView/quizView.js';
import { renderScorePage } from '../../views/ScorePage/ScorePage.js';
import { renderLeaderboard } from '../../views/Leaderboard/Leaderboard.js';
import { renderAdoptionPage } from '../../views/AdoptionPage/AdoptionPage.js';
import { renderCreditsPage } from '../../views/CreditsPage/CreditsPage.js';

const app = document.getElementById('app');

const applicationRoutes = {
  '/': renderMainPage,
  '#quiz-settings': renderQuizSettings,
  '#quiz': renderQuizView,
  '#score-page': renderScorePage,
  '#leadearboard': renderLeaderboard,
  '#adoption-page': renderAdoptionPage,
  '#credits-page': renderCreditsPage,
};

function redirectToMainPage() {
  window.location.hash = '';
  return applicationRoutes['/'];
}

function getRenderFunction(path) {
  return applicationRoutes[path] || redirectToMainPage;
}

export function Router() {
  const url = window.location.hash || '/';
  app.innerHTML = '';
  getRenderFunction(url)();
}

export function onNavigationChange(e) {
  window.location.hash = e.target.className;
}
