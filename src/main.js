import './style.css';
// import './components/timer/quiz-timer.css';
import './views/quiz-settings/quiz-settings.css'
// import './views/ScorePage/ScorePage.css';
// import './views/quiz-settings/quiz-settings.css';
import { createTimer, startTimer, stopTimer } from './components/timer/quiz-timer.js';
import Button from './components/Button.js';
import { QuizSettings } from './views/quiz-settings/quiz-settings';
import { renderScorePage } from './views/ScorePage/ScorePage';

import { renderMainPage } from './views/MainPage/mainPage.js';
renderScorePage();
QuizSettings.showSettings();