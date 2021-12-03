import './style.css';
import {QuizSettings} from "./views/quiz-settings/quiz-settings";


document.querySelector('#app').innerHTML = QuizSettings.showSettings();
