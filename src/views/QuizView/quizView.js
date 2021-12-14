import { QuizSettings } from '../quiz-settings/quiz-settings';
import { createTimer, startTimer, stopTimer } from '../../components/timer/quiz-timer';
import { getQuizQuestions } from '../../api/getQuizQuestions';
import Button from '../../components/Button/Button';

export async function renderQuizView() {
  const questions = await getQuizQuestions(QuizSettings.quizAbout, QuizSettings.questionsNum);
  document.querySelector('#app').append(createLayout());
  startTimer();
  renderQuizData(questions);
}

function createLayout() {
  const container = document.createElement('div');
  container.setAttribute('id', 'quizView');

  const header = document.createElement('h1');
  header.innerText = 'LIVE QUIZ';

  const circles = document.createElement('div');
  circles.setAttribute('id', 'question-numbers');
  for (let i = 0; i < QuizSettings.questionsNum; i++) {
    const number = document.createElement('span');
    number.innerText = i + 1;
    circles.appendChild(number);
  }

  const image = document.createElement('img');

  const question = document.createElement('div');
  question.setAttribute('id', 'question-text');

  const right_arrow = document.createElement('div');
  const left_arrow = document.createElement('div');

  const answers = document.createElement('div');
  answers.setAttribute('id', 'answers');

  container.append(header, circles, image, createTimer(), question, right_arrow, left_arrow, answers);
  return container;
}

function renderQuizData(questions) {
  const image = document.querySelector('img');
  image.src = questions[0].imageUrl;

  const question = document.getElementById('question-text');
  question.innerText = questions[0].question;

  const answers_container = document.getElementById('answers');
  const answers = questions[0].getAnswers();
  for (let i = 0; i < 4; i++) {
    answers_container.appendChild(Button(answers[i], 'answer', true, 'click', () => alert('Wybrano odpowiedz')));
  }
}
