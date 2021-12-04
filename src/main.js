import './style.css';
import './views/quiz-settings/quiz-settings.css';
import {QuizSettings} from "./views/quiz-settings/quiz-settings";


document.querySelector('#app').appendChild(QuizSettings.showSettings());
