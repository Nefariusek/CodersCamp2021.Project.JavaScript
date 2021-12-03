import './style.css';
import { QuizTimer } from './components/timer/quiz-timer.js';

document.querySelector('#app').appendChild(QuizTimer.showTimer());
