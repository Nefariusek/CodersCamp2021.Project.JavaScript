import './MainPage.css';
import { retrieveAnimalFact } from '../../api/FactsController.js';
import { Fact } from '../../model/Fact.js';
import Button from '../../components/Button/Button.js';
import { onNavigationChange } from '../../components/router/Router.js';

const MAIN_ANIMAL = { path: './kangoroo.png', alt: 'kangoroo that tells informations' };
const FACT_ANIMAL = {
  url: 'http://placekitten.com/400/500',
  alt: 'the animal the sentence is about',
  fallbackFact:
    "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.",
};
const ADOPTION_ANIMAL = { url: 'http://placekitten.com/300/400', alt: 'the animal to adoption' };

export function renderMainPage() {
  renderMainView();
  renderNavigation();
  renderAnimalFact();
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
            <img src="${FACT_ANIMAL.url}" alt="${FACT_ANIMAL.alt}">
          </div>
          <div class="bubble-text">
            <h2>Did you know?</h2>
          </div>
        </div>

        <div class="bubble adoption">
          <div class="bubble-img">
            <img src="${ADOPTION_ANIMAL.url}" alt="${ADOPTION_ANIMAL.alt}">
          </div>
          <div class="bubble-text">
            <h2>Or maybe you'd like to adopt your own pet?</h2>
            <p>This one is looking for home</p>
            <p>See more here: <a href="#">Adoption Page</a></p>
          </div>
        </div>
      </div>

      <div class="animal">
        <img src="${MAIN_ANIMAL.path}" alt="${MAIN_ANIMAL.alt}" />
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

async function renderAnimalFact() {
  const factItem = document.querySelector('.bubble-text');
  const factSentence = document.createElement('p');
  const FACT =
    "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.";

  factSentence.innerText = FACT;
  factItem.append(factSentence);
}
