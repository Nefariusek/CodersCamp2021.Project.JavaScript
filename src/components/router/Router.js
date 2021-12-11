import { renderMainPage } from '../../views/MainPage/mainPage.js';
import { renderQuizSettings } from '../../views/quiz-settings/quiz-settings.js';

const app = document.getElementById('app');

const applicationRoutes = {
  '/': renderMainPage,
  '#quiz-settings': renderQuizSettings,
};

function setRenderFunction(path) {
  if (applicationRoutes[path] === undefined) {
    return () => alert('Page does not exist!');
  } else {
    return applicationRoutes[path];
  }
}

export function Router() {
  const url = window.location.hash || '/';
  app.innerHTML = '';
  const renderer = setRenderFunction(url);
  if (renderer) {
    renderer();
  }
}
