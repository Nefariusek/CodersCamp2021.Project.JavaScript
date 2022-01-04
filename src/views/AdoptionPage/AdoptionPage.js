import './AdoptionPage.css';
import Button from '../../components/Button/Button';

const PAGE_TITLE = 'ADOPTION';
const MAIN_TEXT = 'CHOOSE YOUR NEW PET:';
const MAIN_ANIMAL = { pathOrUrl: '../bird.png', alt: 'flying bird' };
const ANIMAL_TYPES = [
  { type: 'cat', pathOrUrl: 'https://www.petfinder.com/' },
  { type: 'dog', pathOrUrl: 'https://www.petfinder.com/' },
  { type: 'bird', pathOrUrl: 'https://www.petfinder.com/' },
];

export function renderAdoptionPage() {
  renderAdoptionPageView();
  renderNavigation();
}

function renderAdoptionPageView() {
  document.querySelector('#app').innerHTML = `
    <div class="container adoption-page">
    
      <div class="header">
        <h1>${PAGE_TITLE}</h1>
      </div>
 
      <div class="text-container">
        <p>${MAIN_TEXT}</p>
      </div>

      <div class="navigation-container">
      </div>

      <div class="main-animal">
        <img src="${MAIN_ANIMAL.pathOrUrl}" alt="${MAIN_ANIMAL.alt}" /></div>
      </div>  

    </div>`;
}

function renderNavigation() {
  const navContainer = document.querySelector('.navigation-container');
  const animalList = document.createElement('ul');

  ANIMAL_TYPES.forEach((animal) => {
    const animalOption = document.createElement('li');
    animalOption.innerHTML = `<a href="${animal.pathOrUrl}" target="_blank" class="option ${
      animal.type
    }"><span>${animal.type.toUpperCase()}</span></a>`;
    animalList.append(animalOption);
  });

  const goToMainPage = Button('Main Page', 'go-home', false, 'click', onMainPageClick);

  navContainer.append(animalList, goToMainPage);
}

const onMainPageClick = () => {
  window.location.hash = '';
};
