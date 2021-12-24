import './AdoptionPage.css';
import Button from '../../../../Project1.JS/src/components/Button/Button.js';

const PAGE_TITLE = 'ADOPTION';
const MAIN_ANIMAL = { pathOrUrl: './bird.png', alt: 'flying bird' };

export function renderAdoptionPage() {
  renderAdoptionPageView();
}

function renderAdoptionPageView() {
  document.querySelector('#app').innerHTML = `
    <div class="container adoption-page">
    
      <div class="header">
        <h1>${PAGE_TITLE}</h1>
      </div>
 
      <div class="text-container">
        <p>CHOOSE YOUR NEW PET:</p>
      </div>

      <div class="options-container">
        <nav>
          <ul>
            <li><a href="https://www.petfinder.com/" class="option cat"><span>CAT</span></a></li>
            <li><a href="https://www.petfinder.com/" class="option dog"><span>DOG</span></a></li>
            <li><a href="https://www.petfinder.com/" class="option bird"><span>BIRD</span></a></li>
          </ul>
        </nav>
      </div>

      <div class="main-animal">
        <img src="${MAIN_ANIMAL.pathOrUrl}" alt="${MAIN_ANIMAL.alt}" /></div>
      </div>  

    </div>`;
}
