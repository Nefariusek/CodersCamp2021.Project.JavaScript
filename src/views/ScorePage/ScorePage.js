import './ScorePage.css';
import { scoreLocalStorage,saveHighScore } from '../../score/user-score';
import Button from '../../components/Button';
import '../../components/Button.css';

export function RenderScorePage(){
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const recentUserScore = 12;
    const questionsNumber=12;
    
    const div=document.createElement('div');
    div.setAttribute('id','scorePage');
    div.append(renderGraphics(),RenderScore(recentUserScore,questionsNumber),renderNickForm(),renderMenuButton(),renderPlayAgainButton());
    document.querySelector('#app').append(div);
}

function RenderScore(score,questionsNumber){
    const div=document.createElement('div');
    const congratsText=document.createElement('h2');
    const scoreText=document.createElement('h2');
    const finalScore=document.createElement('h2');
    finalScore.setAttribute('id','finalScore');
    congratsText.innerText='CONGRATS!';
    scoreText.innerText='YOUR SCORE IS: ';
    div.append(congratsText,scoreText,finalScore);
    return div;
}

function renderGraphics(){
    const img=document.createElement('img');
    img.setAttribute('src','../../public/cat.png');
    img.setAttribute('alt','Congrats!');
    img.setAttribute('width','350');
    img.setAttribute('height','350');
    return img;
}

function renderNickForm(){
    const div=document.createElement('div');
    div.setAttribute('id','nickFormDiv');
    const input=document.createElement('input');
    input.setAttribute('id','username');
    input.setAttribute('value','NICK');
    div.append(input,Button('SUBMIT','saveScoreBtn',false,'click',saveNick));
    return div;
}

function saveNick(){
    const recentUserScore = 12;
    const input=document.getElementById('username');
    const saveButton=document.getElementsByClassName('saveScoreBtn')[0];
    console.log(saveButton);
    saveButton.addEventListener('click',saveHighScore);
    if (!nickValidation()){
        alert("Type in your nickname!");
    }
}

function nickValidation(){
    const input=document.getElementById('username');
    if (input.value!='' && input.value!='NICK'){
        return true;
    } else {
        return false;
    }
}

function renderMenuButton(){
    return(Button('MENU','menuButton',false,'click',goToMainPage))
}

function renderPlayAgainButton(){
    return(Button('PLAY AGAIN','playAgainButton',false,'click',playAgain))
}

function goToMainPage(){
    console.log('Go to main page!');
}

function playAgain(){
    console.log('Play again!');
}