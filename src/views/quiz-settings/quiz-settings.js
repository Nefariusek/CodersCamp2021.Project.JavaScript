class QuizSettings{
    quizAbout;
    questionsNumber;
    questionsType;

    static showSettings(){
        const settings =document.createElement("div");
        const form=document.createElement("form");
        const about=document.createElement("div");
        const questionsNumberdiv=document.createElement("div");
        const questionsType=document.createElement("div");

        const buttonCats=document.createElement("input");
        buttonCats.type="button";
        const buttonDogs=document.createElement("input");
        buttonDogs.type="button";
        about.append("Quiz about:",buttonCats,buttonDogs);
        // buttonCats.addEventListener("click",function(){
        //     console.log("dotknięty");
        // });

        const QuestionsNumber=document.createElement("input");
        questionsNumberdiv.append("Questions number:",QuestionsNumber);
        
        const buttonOpen=document.createElement("input");
        buttonOpen.type="button";
        const buttonMultipleChoice=document.createElement("input");
        buttonMultipleChoice.type="button";
        questionsType.append("Questions type:",buttonOpen,buttonMultipleChoice);

        const buttonStartQuiz=document.createElement("input");
        buttonStartQuiz.type="submit";

        form.append(about,questionsNumberdiv,questionsType, buttonStartQuiz);
        settings.appendChild(form);

        console.log(this.quizAbout,this.questionsType,this.questionsNumber);


        form.addEventListener("click",function(){
            console.log("dotknięty");
        });

        return settings.innerHTML;
    }
};



export {QuizSettings};