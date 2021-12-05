import './style.css';
import './components/timer/quiz-timer.css';
import { createTimer, startTimer, stopTimer } from './components/timer/quiz-timer.js';

document.querySelector('#app').appendChild(createTimer());
startTimer();
setTimeout(stopTimer, 1000 * 35);
