import './MainPage.css';
import Button from '../../components/Button/Button';
import Bubble from '../../components/Bubble/Bubble';
import ImageFact from '../../model/ImageFact';
import { retrieveAnimalFact } from '../../services/factService';
import { onNavigationChange } from '../../components/router/Router';

const PAGE_TITLE = 'ANIMALIADA';
const MAIN_ANIMAL_IMG = { pathOrUrl: './kangoroo.png', alt: 'kangoroo that tells informations' };
const FACT_HEADER = 'Did you know?';
const AdoptionBubbleContent = {
  IMG: { pathOrUrl: 'https://placedog.net/150/150?random', alt: 'the animal to adoption' },
  HEADER_TEXT: "Maybe you'd like to adopt your own pet?",
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
  const bubbleAdoption = createAdoptionBubble();
  document.querySelector('.bubbles').append(bubbleAdoption);
  const bubbleFact = createFactBubble();
  document.querySelector('.bubbles').append(bubbleFact);
}

function createFactBubble() {
  const bubbleFact = Bubble('lower', '', undefined, true);
  bubbleFact.classList.add('fact', 'invisible');
  return bubbleFact;
}

function createAdoptionBubble() {
  const bubbleAdoption = Bubble('higher', AdoptionBubbleContent.HEADER_TEXT, AdoptionBubbleContent.SENTENCES, true);
  bubbleAdoption.classList.add('adoption', 'invisible');
  return bubbleAdoption;
}

function renderBubblesContent() {
  renderAdoptionBubbleContent();
  renderFactBubbleContent();
}

async function renderFactBubbleContent() {
  const imageFact = await getAnimalImageFact();
  const imageObject = new Image();
  imageObject.addEventListener(
    'load',
    () => {
      renderAnimalFact(imageFact);
      fadeInBubble('fact');
    },
    false,
  );
  renderAnimalFactImg(imageFact, imageObject);
}

function renderAdoptionBubbleContent() {
  const imageObject = new Image();
  imageObject.addEventListener(
    'load',
    () => {
      fadeInBubble('adoption');
    },
    false,
  );

  renderAnimalAdoptionImg(imageObject);
}

function fadeInBubble(bubbleClass) {
  const bubble = document.querySelector(`.bubble.${bubbleClass}`);
  bubble.classList.remove('invisible');
  bubble.classList.add('fade-in');
}

function renderAnimalFact(fact) {
  const factSentenceSpace = document.querySelector('.bubble.fact .bubble-text');
  const factHeader = factSentenceSpace.querySelector('h2');
  const factSentence = document.createElement('p');

  factHeader.innerText = FACT_HEADER;
  factSentence.innerText = fact.sentence;
  factSentenceSpace.append(factSentence);
}

function renderAnimalFactImg(imageFact, imageObject) {
  const factImageSpace = document.querySelector('.bubble.fact .bubble-img');
  createImage(factImageSpace, imageFact, imageObject);
}

function renderAnimalAdoptionImg(imageObject) {
  const adoptionImageSpace = document.querySelector('.bubble.adoption .bubble-img');
  createImage(adoptionImageSpace, AdoptionBubbleContent.IMG, imageObject);
}

function createImage(domElement, imageData, imageElement) {
  const image = imageElement || document.createElement('img');
  image.src = imageData.pathOrUrl;
  image.alt = imageData.alt;
  domElement.append(image);
}

async function getAnimalImageFact() {
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
