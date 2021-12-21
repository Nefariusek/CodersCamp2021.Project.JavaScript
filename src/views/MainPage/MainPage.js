import './MainPage.css';
import { retrieveAnimalFact } from '../../api/FactsController.js';
import { ImageFact } from '../../model/Fact.js';
import Button from '../../components/Button/Button.js';
import { onNavigationChange } from '../../components/router/Router.js';

const MAIN_ANIMAL = { pathOrUrl: './kangoroo.png', alt: 'kangoroo that tells informations' };
const ADOPTION_ANIMAL = { pathOrUrl: 'http://placekitten.com/300/400', alt: 'the animal to adoption' };

export async function renderMainPage() {
  renderMainView();
  renderNavigation();
  renderMainAnimalImg();
  renderBubblesContent();
}

function renderMainView() {
  document.querySelector('#app').innerHTML = `
  <div class="container main-page-container">
  
    <div class="header">
      <h1>ANIMALIADA</h1>
    </div>

    <div class="navigation-container">
    </div>

    <div class="info">

      <div class="bubbles">
        <div class="bubble fact">
          <div class="bubble-img">
          </div>
          <div class="bubble-text">
            <h2>Did you know?</h2>
          </div>
        </div>

        <div class="bubble adoption">
          <div class="bubble-img">
          </div>
          <div class="bubble-text">
            <h2>Or maybe you'd like to adopt your own pet?</h2>
            <p>This one is looking for home</p>
            <p>See more here: <a href="#">Adoption Page</a></p>
          </div>
        </div>
      </div>

      <div class="animal">
      </div>        

    </div>
  
  </div>
  `;
}

function renderNavigation() {
  const navContainer = document.querySelector('.navigation-container');

  const handleNavigationButtonClick = (e) => onNavigationChange(e);

  const quizButton = Button('Start Quiz', 'quiz-settings', true, 'click', handleNavigationButtonClick);
  const leaderboardButton = Button('Leaderboard', 'leadearboard', true, 'click', handleNavigationButtonClick);
  const adoptionButton = Button('Adoption', 'adoption-button', true, 'click', handleNavigationButtonClick);
  const creditsButton = Button('Credits', 'credits-button', true, 'click', handleNavigationButtonClick);

  navContainer.append(quizButton, leaderboardButton, adoptionButton, creditsButton);
}

function renderBubblesContent() {
  renderAdoptionBubbleContent();
  renderFactBubbleContent();
}

async function renderFactBubbleContent() {
  const factObj = await getAnimalFact();
  renderAnimalFact(factObj);
  renderAnimalFactImg(factObj);
}

function renderAdoptionBubbleContent() {
  renderAnimalAdoptionImg();
}

async function renderAnimalFact(factObj) {
  const factSentenceItem = document.querySelector('.bubble.fact .bubble-text');
  const factSentence = document.createElement('p');

  factSentence.innerText = factObj.sentence;
  factSentenceItem.append(factSentence);
}

async function getAnimalFact() {
  const newImageFact = new ImageFact();
  const imageFact = await retrieveAnimalFact();
  newImageFact.sentence = imageFact;
  return newImageFact;
}

function renderAnimalFactImg(factObj) {
  const factImageItem = document.querySelector('.bubble.fact .bubble-img');
  createImage(factImageItem, factObj);
}

function renderAnimalAdoptionImg() {
  const adoptionImageItem = document.querySelector('.bubble.adoption .bubble-img');
  createImage(adoptionImageItem, ADOPTION_ANIMAL);
}

function renderMainAnimalImg() {
  const mainAnimalImageItem = document.querySelector('.animal');
  createImage(mainAnimalImageItem, MAIN_ANIMAL);
}

function createImage(domElem, obj) {
  const imgElem = document.createElement('img');
  imgElem.src = obj.pathOrUrl;
  imgElem.alt = obj.alt;
  domElem.append(imgElem);
}
