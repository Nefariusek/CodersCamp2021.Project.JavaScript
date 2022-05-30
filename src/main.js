import './style.css';
import './sass/style.scss';
import './components/QuizTimer/QuizTimer';
import './views/quiz-settings/quiz-settings.css';
import './views/QuizView/quizView.css';
import './views/ScorePage/ScorePage.css';

import { Router } from './components/router/Router';

window.addEventListener('load', Router);
window.addEventListener('hashchange', Router);
