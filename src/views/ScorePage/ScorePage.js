import './ScorePage.css';

import Button from '../../components/Button';
import '../../components/Button.css';

export function RenderScorePage(score,questionsNumber){
    const div=document.createElement('div');
    div.setAttribute('id','scorePage');
    div.append(renderGraphics(),RenderScore(score,questionsNumber),renderNickForm(),renderMenuButton(),renderPlayAgainButton());
    return div;
}

function RenderScore(score,questionsNumber){
    const div=document.createElement('div');
    const congratsText=document.createElement('h2');
    const scoreText=document.createElement('h2');
    congratsText.innerText='CONGRATS!';
    scoreText.innerText='YOUR SCORE IS: '+score+"/"+questionsNumber;
    div.append(congratsText,scoreText);
    return div;
}

function renderGraphics(){
    const img=document.createElement('img');
    img.setAttribute('src','../../public/cat.png');
    img.setAttribute('alt','Congrats!');
    img.setAttribute('width','500');
    img.setAttribute('height','500');
    return img;
}

function renderNickForm(){
    const div=document.createElement('div');
    div.setAttribute('id','nickFormDiv');
    const input=document.createElement('input');
    input.setAttribute('id','nickInput');
    input.setAttribute('value','NICK');
    div.append(input,Button('SUBMIT','nickSubmitButton',false,'click',saveNick));
    return div;
}

function saveNick(){
    const input=document.getElementById('nickInput');
    if (nickValidation()){
        console.log(input.value);
    } else {
        alert("Type in your nickname!")
    }
}

function nickValidation(){
    const input=document.getElementById('nickInput');
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