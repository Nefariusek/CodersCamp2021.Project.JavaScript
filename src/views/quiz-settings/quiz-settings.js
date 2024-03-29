import './quiz-settings.css';
import '../../style.css';
import Button from '../../components/Button/Button';

class QuizSettings {
  quizAbout;

  questionsNum;

  questionsType;

  static createRadioButton(value, settingName) {
    const div = document.createElement('div');
    div.setAttribute('class', 'radioButton');
    const button = document.createElement('input');
    button.setAttribute('id', value);
    button.type = 'radio';
    button.value = value;
    button.name = settingName;
    const label = document.createElement('label');
    label.setAttribute('for', value);
    label.innerText = value;
    this.addEventListenerToComponent(button, 'click', settingName, value);
    div.append(button, label);
    return div;
  }

  static addEventListenerToComponent(component, event, settingName, value) {
    component.addEventListener(event, () => {
      if (settingName === 'quizAbout') {
        this.quizAbout = value;
      }
      if (settingName === 'questionsType') {
        this.questionsType = value;
      }
      if (settingName === 'questionsNum') {
        this.questionsNum = parseInt(component.value, 10);
      }
    });
  }

  static createAboutSection() {
    const about = document.createElement('div');
    const text = document.createElement('p');
    text.innerHTML = '<h3>Quiz about:</h3>';
    about.append(text, this.createRadioButton('CATS', 'quizAbout'), this.createRadioButton('DOGS', 'quizAbout'));
    return about;
  }

  static createQuestionsNumberInput() {
    const questionsNumber = document.createElement('input');
    questionsNumber.setAttribute('id', 'number');
    this.addEventListenerToComponent(questionsNumber, 'input', 'questionsNum', questionsNumber);
    return questionsNumber;
  }

  static createQuestionsNumberdiv() {
    const questionsNumberdiv = document.createElement('div');
    const text = document.createElement('p');
    text.innerHTML = '<h3>Number of questions:</h3>';
    questionsNumberdiv.append(text, this.createQuestionsNumberInput());
    return questionsNumberdiv;
  }

  static createQuestionsTypeSection() {
    const questionsType = document.createElement('div');
    const text = document.createElement('p');
    text.innerHTML = '<h3>Type of questions:</h3>';
    questionsType.append(
      text,
      this.createRadioButton('OPEN', 'questionsType'),
      this.createRadioButton('MULTIPLE CHOICE', 'questionsType'),
    );
    return questionsType;
  }

  static createButtonStartQuiz() {
    const buttonStartQuiz = document.createElement('input');
    buttonStartQuiz.type = 'submit';
    buttonStartQuiz.setAttribute('id', 'submitButton');
    buttonStartQuiz.value = 'START QUIZ';
    return buttonStartQuiz;
  }

  static navigateToMenu() {
    window.location.hash = '';
  }

  static createMenuButton() {
    const menuButton = Button('MENU', 'settingsMenuButton', null, 'click', this.navigateToMenu);
    return menuButton;
  }

  static createForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'quizSettingsForm');

    form.append(
      this.createAboutSection(),
      this.createQuestionsNumberdiv(),
      this.createQuestionsTypeSection(),
      this.createButtonStartQuiz(),
    );
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateQuestionNumber(this.questionsNum)) {
        alert('Insert questions number between 1 and 20');
      } else if (this.quizAbout === undefined) {
        alert('Choose animals');
      } else if (this.questionsType === undefined) {
        alert('Choose type of questions');
      } else {
        window.location.hash = 'quiz';
      }
    });
    return form;
  }

  static showSettings() {
    this.quizAbout = undefined;
    this.questionsNum = undefined;
    this.questionsType = undefined;
    const settings = document.createElement('div');
    settings.appendChild(this.createForm());
    settings.setAttribute('id', 'quiz-settings');
    settings.append(this.createMenuButton());
    document.querySelector('#app').append(settings);
  }
}

export { QuizSettings };
export function renderQuizSettings() {
  QuizSettings.showSettings();
}

function validateQuestionNumber(questionsNum) {
  return !Number.isInteger(questionsNum) || questionsNum < 1 || questionsNum > 20;
}
