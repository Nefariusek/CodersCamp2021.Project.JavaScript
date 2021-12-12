import './style.css';
// import './components/timer/quiz-timer.css';
import './views/quiz-settings/quiz-settings.css'
// import './views/ScorePage/ScorePage.css';
// import './views/quiz-settings/quiz-settings.css';
import { createTimer, startTimer, stopTimer } from './components/timer/quiz-timer.js';
import Button from './components/Button.js';
import { QuizSettings } from './views/quiz-settings/quiz-settings';
import { RenderScorePage } from './views/ScorePage/ScorePage';

import { renderMainPage } from './views/MainPage/mainPage.js';

// function main() {
//   renderMainPage();
// }

// main();

// const simpleCallback = () => {
//   console.log(`Greetings from koala`);
// };

// // how to use: Button(label, className, animate, 'eventListener', callback)
// const buttonQuiz = Button('start quiz', 'quiz', true, 'click', simpleCallback);
// const buttonLeaderboard = Button('leaderboard', 'leaderboard', true, 'click', simpleCallback);
// const buttonAdoption = Button('adoption', 'adoption', true, 'click', simpleCallback);
// const buttonCredits = Button('credits', 'credits', true, 'click', simpleCallback);
// const buttonStatic = Button('abort koala', 'noKoala', false, 'click', simpleCallback);

// document.querySelector('#app').append(buttonQuiz, buttonLeaderboard, buttonAdoption, buttonCredits);
// document.querySelector('#app').append(buttonStatic);

// document.querySelector('#app').appendChild(createTimer());
// startTimer();
// document.querySelector('#app').append(QuizSettings.showSettings());
// RenderScorePage();
QuizSettings.showSettings();