import { renderMainPage } from '../../views/MainPage/mainPage.js';
import { settings } from '../../main.js';

const app = document.getElementById('app');

const applicationRoutes = {
  '/': renderMainPage,
  '#quiz-settings': settings,
};

function checkRoute(path) {
  if (applicationRoutes[path] === undefined) {
    return () => alert('Podana strona nie istnieje!');
  } else {
    return applicationRoutes[path];
  }
}

function Router() {
  const url = window.location.hash || '/';
  app.innerHTML = '';
  const render_view = checkRoute(url);
  render_view();
}

window.addEventListener('load', Router);
window.addEventListener('hashchange', Router);
