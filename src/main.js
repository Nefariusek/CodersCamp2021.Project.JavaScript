import './style.css';
import './components/timer/quiz-timer.css';
import './views/quiz-settings/quiz-settings.css';

import Answer from './components/Answer/Answer';
import Question from './model/question';

import { Router } from './components/router/Router.js';

window.addEventListener('load', Router);
window.addEventListener('hashchange', Router);

var q=new Question;
var ans=new Answer;
ans.Question=q;
console.log(ans);
console.log(ans.timeOfAnswer);
console.log(ans.Question);
console.log(ans.lifelineUsed);
ans.lifelineUsed=100;
ans.timeOfAnswer=20;

console.log(ans);
console.log(ans.timeOfAnswer);
console.log(ans.Question);
console.log(ans.lifelineUsed);
