import './style.css';
import './components/timer/quiz-timer.css';
import { createTimer, startTimer, stopTimer } from './components/timer/quiz-timer.js';
import Button from './components/Button.js';
import getData from './api/retrieveQuizQuestions';
import Question from './model/question.js';

import { renderMainPage } from './views/MainPage/mainPage.js';

function main() {
  renderMainPage();
}

main();
const buttonFetch = Button('fetch data', 'fetch-felines', false, 'click', getData);
document.querySelector('#app').append(buttonFetch);

const simpleCallback = () => {
  console.log(`Greetings from koala`);
};

// how to use Question class Question has {imageUrl, correct, incorrectAnswers, question} and .getAnswers method

const firstQuestion = new Question(
  'url',
  'Ala',
  ['Ula', 'Ela', 'Ola'],
  "Mirror, mirror on the wall who's the fairest of them all?",
);

console.log(firstQuestion.question);
console.log(firstQuestion.getAnswers());
console.log('The correct answer is:');
setTimeout(() => console.log(firstQuestion.correct), 3000);

// how to use: Button(label, className, animate, 'eventListener', callback)
const buttonQuiz = Button('start quiz', 'quiz', true, 'click', simpleCallback);
const buttonLeaderboard = Button('leaderboard', 'leaderboard', true, 'click', simpleCallback);
const buttonAdoption = Button('adoption', 'adoption', true, 'click', simpleCallback);
const buttonCredits = Button('credits', 'credits', true, 'click', simpleCallback);
const buttonStatic = Button('abort koala', 'noKoala', false, 'click', simpleCallback);

document.querySelector('#app').append(buttonQuiz, buttonLeaderboard, buttonAdoption, buttonCredits);
document.querySelector('#app').append(buttonStatic);

document.querySelector('#app').appendChild(createTimer());
startTimer();
