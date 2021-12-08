class QuizSettings {
    quizAbout;
    questionsNum;
    questionsType;

    static createRadioButton(value, settingName) {
        const div = document.createElement('div');
        div.setAttribute('class', 'radioButton')
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
                this.questionsNum = component.value;
            }
            console.log(this.quizAbout, this.questionsType, this.questionsNum);
        });
    }



    static createAboutSection() {
        const about = document.createElement('div');
        const text = document.createElement('p');
        text.innerText = 'Quiz about: ';
        about.append(
            text,
            this.createRadioButton('cats', 'quizAbout'),
            this.createRadioButton('dogs', 'quizAbout'),
        );
        return about;
    }



    static createQuestionsNumberInput() {
        const questionsNumber = document.createElement('input');
        questionsNumber.setAttribute('id', 'number');
        this.addEventListenerToComponent(questionsNumber, 'input', 'questionsNum', questionsNumber)
        return questionsNumber;
    }



    static createQuestionsNumberdiv() {
        const questionsNumberdiv = document.createElement('div');
        const text = document.createElement('p');
        text.innerText = 'Questions number: ';
        questionsNumberdiv.append(text, this.createQuestionsNumberInput());
        return questionsNumberdiv;
    }



    static createQuestionsTypeSection() {
        const questionsType = document.createElement('div');
        const text = document.createElement('p');
        text.innerText = 'Questions type: ';
        questionsType.append(
            text,
            this.createRadioButton('open', 'questionsType'),
            this.createRadioButton('multiple choice', 'questionsType'),
        );
        return questionsType;
    }



    static createButtonStartQuiz() {
        const buttonStartQuiz = document.createElement('input');
        buttonStartQuiz.type = 'submit';
        buttonStartQuiz.setAttribute('id', 'submit');
        buttonStartQuiz.value = 'Start Quiz';
        return buttonStartQuiz;
    }



    static createForm() {
        const form = document.createElement('form');

        form.append(
            this.createAboutSection(),
            this.createQuestionsNumberdiv(),
            this.createQuestionsTypeSection(),
            this.createButtonStartQuiz()
        );
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.questionsNum === undefined || this.questionsNum < 1 || this.questionsNum > 20) {
                alert('Insert questions number between 1 and 20');
            } else if (this.quizAbout === undefined) {
                alert('Choose animals');
            } else if (this.quizAbout === undefined) {
                alert('Choose questionsType');
            } else {
                alert(
                    'Quiz about: ' +
                    this.quizAbout +
                    '\nQuestions number: ' +
                    this.questionsNum +
                    '\nQuestions type: ' +
                    this.questionsType,
                );
            }
        });
        return form;
    }



    static showSettings() {
        const settings = document.createElement('div');
        settings.appendChild(this.createForm());
        settings.setAttribute('id', 'quiz-settings');

        return settings;
    }
}





export {
    QuizSettings
};