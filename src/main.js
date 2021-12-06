import './style.css';
import Button from './components/Button.js';

document.querySelector('#app').innerHTML = `
  <h1>CC first project</h1>
`;
// how to use: Button(label, classStyle, animate, listener, callback)
const buttonQuiz = Button('start quiz', 'quiz', true);
const buttonLeaderboard = Button('leaderboard', 'leaderboard', true);
const buttonAdoption = Button('adoption', 'adoption', true);
const buttonCredits = Button('credits', 'credits', true);
const buttonStatic = Button('abort koala', 'noKoala', false);

document.querySelector('#app').append(buttonQuiz, buttonLeaderboard, buttonAdoption, buttonCredits);
document.querySelector('#app').append(buttonStatic);
