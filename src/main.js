import './style.css';
import './components/timer/quiz-timer.css';
import { createTimer, startTimer, stopTimer } from './components/timer/quiz-timer.js';
import Button from './components/Button/Button.js';
import { getQuizQuestions } from './api/getQuizQuestions.js';
import Question from './model/question.js';

import { renderMainPage } from './views/MainPage/mainPage.js';

function main() {
  renderMainPage();
}

main();

const dogCallback = async () => {
  const dogs = await getQuizQuestions('DOGS', 3);
  console.log(dogs);
};

const catCallback = async () => {
  const cats = await getQuizQuestions('CATS', 3);
  console.log(car);
};

const catQuiz = Button('CAT QUIZ!', 'fetch-felines', false, 'click', catCallback);
const dogQuiz = Button('DOG QUIZ!', 'fetch-dogs', false, 'click', dogCallback);
document.querySelector('#app').append(catQuiz, dogQuiz);

const simpleCallback = () => {
  console.log(`Greetings from koala`);
};

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
