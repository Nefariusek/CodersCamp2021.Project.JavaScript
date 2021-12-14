`<ul>
<li><a href="#quiz-settings" data-name="StartQuiz">Start quiz</a></li>
<li><a href="#" data-name="Leaderboard">Leaderboard </a></li>
<li><a href="#" data-name="Adoption">Adoption </a></li>
<li><a href="#" data-name="Credits">Credits</a></li>
</ul>`;
import Button from '../../components/Button/Button.js';

const button = Button('StartQuiz', 'quiz-button', true, 'click', () => console.log('hello from quiz'));

`
<nav>
<ul>
<li id="quiz">
</li>
<li><a href="#" data-name="Leaderboard">Leaderboard </a></li>
<li><a href="#" data-name="Adoption">Adoption </a></li>
<li><a href="#" data-name="Credits">Credits</a></li>
</ul>
</nav>`;
