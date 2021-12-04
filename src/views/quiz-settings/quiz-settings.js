class QuizSettings {
    quizAbout;
    questionsNum;
    questionsType;
    static createButtonCats() {
        const buttonCats = document.createElement('input');
        buttonCats.type = 'button';
        buttonCats.addEventListener('click', () => {
            this.quizAbout = 'cats';
        });
        return buttonCats;
    }

    static createButtonDogs() {
        const buttonDogs = document.createElement('input');
        buttonDogs.type = 'button';
        buttonDogs.addEventListener('click', () => {
            this.quizAbout="dogs"
        });
        return buttonDogs;
    }

    static createAboutSection() {
        const about = document.createElement('div');
        const text = document.createElement('p');
        text.innerText='Quiz about: '
        about.append(text, this.createButtonCats(), this.createButtonDogs());
        return about;
    }

    static createQuestionsNumberInput() {
        const questionsNumber = document.createElement('input');
        questionsNumber.setAttribute('id','number');
        questionsNumber.addEventListener('input', () => {
            this.questionsNum=questionsNumber.value;
        });
        return questionsNumber;
    }

    static createQuestionsNumberSection() {
        const questionsNumberdiv = document.createElement('div');
        const text = document.createElement('p');
        text.innerText='Questions number: '
        questionsNumberdiv.append(text, this.createQuestionsNumberInput());
        return questionsNumberdiv;
    }

    static createButtonOpen() {
        const buttonOpen = document.createElement('input');
        buttonOpen.type = 'button';
        buttonOpen.addEventListener('click', () => {
            this.questionsType="open"
        });
        return buttonOpen;
    }

    static createMultipleChoice() {
        const buttonMultipleChoice = document.createElement('input');
        buttonMultipleChoice.type = 'button';
        buttonMultipleChoice.addEventListener('click', () => {
            this.questionsType="multiple"
        });
        return buttonMultipleChoice;
    }

    static createQuestionsTypeSection() {
        const questionsType = document.createElement('div');
        const text = document.createElement('p');
        text.innerText='Questions type: '
        questionsType.append(text, this.createButtonOpen(), this.createMultipleChoice());
        return questionsType;
    }

    static createForm() {
        const form = document.createElement('form');

        const buttonStartQuiz = document.createElement('input');
        buttonStartQuiz.type = 'submit';
        buttonStartQuiz.setAttribute('id','submit');
        buttonStartQuiz.value='Start Quiz';

        form.append(
            this.createAboutSection(),
            this.createQuestionsNumberSection(),
            this.createQuestionsTypeSection(),
            buttonStartQuiz,
        );
        form.addEventListener("submit", e => {
            e.preventDefault();
            if (this.questionsNum===undefined || this.questionsNum<1 || this.questionsNum>20){
                alert("Insert questions number between 1 and 20");
            }
            else if (this.quizAbout===undefined){
                alert("Choose animals");
            }
            else if (this.quizAbout===undefined){
                alert("Choose questionsType");
            }
            else {
                alert("Quiz about: "+this.quizAbout+"\nQuestions number: "+this.questionsNum+"\nQuestions type: "+this.questionsType);
            }

        });
        return form;
    }

    static showSettings() {
        const settings = document.createElement('div');
        settings.appendChild(this.createForm());
        settings.setAttribute('id','quiz-settings');

        console.log(this.quizAbout, this.questionsType, this.questionsNum);

        return settings;
    }
}

export {
    QuizSettings
};