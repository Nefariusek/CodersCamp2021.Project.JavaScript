import './MainPage.css';
import Button from '../../components/Button/Button';
import Bubble from '../../components/Bubble/Bubble';
import ImageFact from '../../model/ImageFact';
import { retrieveAnimalFact } from '../../api/FactsController';
import { onNavigationChange } from '../../components/router/Router';

const PAGE_TITLE = 'ANIMALIADA';
const MAIN_ANIMAL_IMG = { pathOrUrl: './kangoroo.png', alt: 'kangoroo that tells informations' };
const AdoptionBubbleContent = {
  IMG: { pathOrUrl: 'http://placekitten.com/300/400', alt: 'the animal to adoption' },
  HEADER_TEXT: "Or maybe you'd like to adopt your own pet?",
  SENTENCES: ['This one is looking for home', 'See more here: <a href="#adoption-page">Adoption Page</a>'],
};

export function renderMainPage() {
  renderMainView();
  renderNavigation();
  renderMainAnimalImg();
  renderBubblesStructure();
  renderBubblesContent();
}

function renderMainView() {
  document.querySelector('#app').innerHTML = `
  <div class="container main-page">
  
    <div class="header">
      <h1>${PAGE_TITLE}</h1>
    </div>

    <div class="navigation-container">
    </div>

    <div class="info">

      <div class="bubbles">
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
  const adoptionButton = Button('Adoption', 'adoption-page', true, 'click', handleNavigationButtonClick);
  const creditsButton = Button('Credits', 'credits-page', true, 'click', handleNavigationButtonClick);

  navContainer.append(quizButton, leaderboardButton, adoptionButton, creditsButton);
}

function renderBubblesStructure() {
  const bubbleFact = createFactBubble();
  document.querySelector('.bubbles').append(bubbleFact);
  const bubbleAdoption = createAdoptionBubble();
  document.querySelector('.bubbles').append(bubbleAdoption);
}

function createFactBubble() {
  const bubbleFact = Bubble('higher', 'Did you know?', undefined, true);
  bubbleFact.classList.add('fact');
  return bubbleFact;
}

function createAdoptionBubble() {
  const bubbleAdoption = Bubble('lower', AdoptionBubbleContent.HEADER_TEXT, AdoptionBubbleContent.SENTENCES, true);
  bubbleAdoption.classList.add('adoption');
  return bubbleAdoption;
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

function renderAnimalFactImg(factObj) {
  const factImageItem = document.querySelector('.bubble.fact .bubble-img');
  createImage(factImageItem, factObj);
}

function renderAnimalAdoptionImg() {
  const adoptionImageItem = document.querySelector('.bubble.adoption .bubble-img');
  createImage(adoptionImageItem, AdoptionBubbleContent.IMG);
}

function createImage(domElem, obj) {
  const imgElem = document.createElement('img');
  imgElem.src = obj.pathOrUrl;
  imgElem.alt = obj.alt;
  domElem.append(imgElem);
}

async function getAnimalFact() {
  const newImageFact = new ImageFact();
  const imageFact = await retrieveAnimalFact();
  newImageFact.sentence = imageFact.fact;
  newImageFact.pathOrUrl = imageFact.imageUrl;
  return newImageFact;
}

function renderMainAnimalImg() {
  const mainAnimalImageItem = document.querySelector('.animal');
  createImage(mainAnimalImageItem, MAIN_ANIMAL_IMG);
}
