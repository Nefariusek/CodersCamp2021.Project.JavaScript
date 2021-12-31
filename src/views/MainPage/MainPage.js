import './MainPage.css';
import Button from '../../components/Button/Button';
import Bubble from '../../components/Bubble/Bubble';
import ImageFact from '../../model/ImageFact';
import { retrieveAnimalFact } from '../../api/FactsController';
import { onNavigationChange } from '../../components/router/Router';

const PAGE_TITLE = 'ANIMALIADA';
const MAIN_ANIMAL_IMG = { pathOrUrl: './kangoroo.png', alt: 'kangoroo that tells informations' };
const FACT_HEADER = 'Did you know?';
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
  const bubbleFact = Bubble('higher', '', undefined, true);
  bubbleFact.classList.add('fact', 'invisible');
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
  const imageFact = await getAnimalImageFact();
  const imageObject = new Image();
  imageObject.addEventListener(
    'load',
    () => {
      renderAnimalFact(imageFact);
    },
    false,
  );
  renderAnimalFactImg(imageFact, imageObject);
}

function renderAdoptionBubbleContent() {
  renderAnimalAdoptionImg();
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
  const factBubble = document.querySelector('.bubble.fact');
  const factImageSpace = document.querySelector('.bubble.fact .bubble-img');
  createImage(factImageSpace, imageFact, imageObject);

  imageObject.addEventListener(
    'load',
    () => {
      factBubble.classList.remove('invisible');
      factBubble.classList.add('fade-in');
    },
    false,
  );
}

function renderAnimalAdoptionImg() {
  const adoptionImageSpace = document.querySelector('.bubble.adoption .bubble-img');
  createImage(adoptionImageSpace, AdoptionBubbleContent.IMG);
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
