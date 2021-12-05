import './style.css';
import createButton from '../features/buttonComponent.js';

document.querySelector('#app').innerHTML = `
  <h1>CC first project</h1>
`;
// how to use: createButton(label, classStyle, animate)
const buttonQuiz = createButton('start quiz', 'quiz', true);
const buttonLeaderboard = createButton('leaderboard', 'leaderboard', true);
const buttonAdoption = createButton('adoption', 'adoption', true);
const buttonCredits = createButton('credits', 'credits', true);
const buttonStatic = createButton('abort koala', 'noKoala', false);

document.querySelector('#app').append(buttonQuiz, buttonLeaderboard, buttonAdoption, buttonCredits);
document.querySelector('#app').append(buttonStatic);
