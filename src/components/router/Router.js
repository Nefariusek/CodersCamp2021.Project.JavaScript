import { renderMainPage } from '../../views/MainPage/mainPage.js';
import { renderQuizSettings } from '../../views/quiz-settings/quiz-settings.js';

const app = document.getElementById('app');

const applicationRoutes = {
  '/': renderMainPage,
  '#quiz-settings': renderQuizSettings,
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
