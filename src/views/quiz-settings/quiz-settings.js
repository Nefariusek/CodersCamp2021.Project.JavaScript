class QuizSettings {
    quizAbout;
    questionsNum;
    questionsType;

    static createRadioButton(val,nameOfRadio,what,side){
        const div=document.createElement('div');
        const button = document.createElement('input');
        button.setAttribute('id',val);
        button.type='radio';
        button.value=val;
        button.name=nameOfRadio;
        const label=document.createElement('label');
        label.setAttribute('for',val);
        label.setAttribute('class',side);
        label.innerText=val;
        button.addEventListener('click', () => {
            if (what=="about"){
                this.quizAbout=val;
            }
            if (what=="type"){
                this.questionsType=val;
            }
            
        });
        if (side=="left"){
            div.append(label,button);
        }
        else {
            div.append(button,label);
        }
        return div;
    }

    static createAboutSection() {
        const about = document.createElement('div');
        const text = document.createElement('p');
        text.innerText='Quiz about: '
        about.append(text,this.createRadioButton("cats","about","about","left"), this.createRadioButton("dogs","about","about","right"));
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

    static createQuestionsTypeSection() {
        const questionsType = document.createElement('div');
        const text = document.createElement('p');
        text.innerText='Questions type: '
        questionsType.append(text, this.createRadioButton("open","type","type","left"), this.createRadioButton("multiple choice","type","type","right"));
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