import Button from '../../components/Button/Button.js';
import './MainPage.css';
import { onNavigationChange } from '../../components/router/Router.js';

const MAIN_ANIMAL_PATH = './kangoroo.png';
const FACT_ANIMAL_URL = 'http://placekitten.com/400/500';
const ADOPTION_ANIMAL_URL = 'http://placekitten.com/300/400';

export function renderMainPage() {
  renderMainView();
  renderAnimalFact();
}

function renderMainView() {
  document.querySelector('#app').innerHTML = `
  <div class="container">
  
    <div class="header">
      <h1>ANIMALIADA</h1>
    </div>

    <div class="navigation-container">
    </div>

    <div class="info">

      <div class="bubbles">
        <div class="bubble fact">
          <div class="bubble-img">
            <img src="${FACT_ANIMAL_URL}" alt="the animal the sentence is about">
          </div>
          <div class="bubble-text">
            <h2>Did you know?</h2>
          </div>
        </div>

        <div class="bubble adoption">
          <div class="bubble-img">
            <img src="${ADOPTION_ANIMAL_URL}" alt="the animal to adoption">
          </div>
          <div class="bubble-text">
            <h2>Or maybe you'd like to adopt your own pet?</h2>
            <p>This one is looking for home</p>
            <p>See more here: <a href="#">Adoption Page</a></p>
          </div>
        </div>
      </div>

      <div class="animal">
        <img src="${MAIN_ANIMAL_PATH}" alt="kangoroo that tells informations" /></div>
      </div>        

    </div>
  
  </div>
  `;

  const navContainer = document.querySelector('.navigation-container');

  const handleNavigationButtonClick = (e) => onNavigationChange(e);

  const quizButton = Button('Start Quiz', 'quiz-settings', true, 'click', handleNavigationButtonClick);
  const leaderboardButton = Button('Leaderboard', 'leadearboard', true, 'click', handleNavigationButtonClick);
  const adoptionButton = Button('Adoption', 'adoption-button', true, 'click', handleNavigationButtonClick);
  const creditsButton = Button('Credits', 'credits-button', true, 'click', handleNavigationButtonClick);

  navContainer.append(quizButton, leaderboardButton, adoptionButton, creditsButton);
  const navItems = navContainer.querySelectorAll('a');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      alert(`Hello! I'm ${item.dataset.name} site`);
    });
  });
}

async function renderAnimalFact() {
  const factItem = document.querySelector('.bubble-text');
  const factSentence = document.createElement('p');
  const FACT =
    "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.";

  factSentence.innerText = FACT;
  factItem.append(factSentence);
}
