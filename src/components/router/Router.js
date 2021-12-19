import { renderMainPage } from '../../views/MainPage/MainPage.js';
import { renderQuizSettings } from '../../views/quiz-settings/quiz-settings.js';
import { renderQuizView } from '../../views/QuizView/quizView.js';
import { renderScorePage } from '../../views/ScorePage/ScorePage.js';
import { renderLeaderboard } from '../../views/Leaderboard/Leaderboard.js';
import { renderChoicePage } from '../../views/confirmChoicePage/confirmChoicePage';

const app = document.getElementById('app');

const applicationRoutes = {
  '/': renderMainPage,
  '#quiz-settings': renderQuizSettings,
  '#quiz': renderQuizView,
  '#score-page': renderScorePage,
  '#leadearboard': renderLeaderboard,
  '#confirm-choice': renderChoicePage,
};

function redirectToMainPage() {
  window.location.hash = '';
  return applicationRoutes['/'];
}

function setRenderFunction(path) {
  if (applicationRoutes[path] === undefined) {
    return redirectToMainPage;
  } else {
    return applicationRoutes[path];
  }
}

export function Router() {
  const url = window.location.hash || '/';
  app.innerHTML = '';
  setRenderFunction(url)();
}

export function onNavigationChange(e) {
  window.location.hash = e.target.className;
}
