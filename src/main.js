import './style.css';
import './components/timer/quiz-timer.css';
import './views/quiz-settings/quiz-settings.css';
import './views/QuizView/quizView.css';
import './views/ScorePage/ScorePage.css';

import { Router } from './components/router/Router.js';
import { questionRandomizer } from './model/randomizer.js';

window.addEventListener('load', Router);
window.addEventListener('hashchange', Router);

const cats = questionRandomizer('CATS');
console.log(cats);
