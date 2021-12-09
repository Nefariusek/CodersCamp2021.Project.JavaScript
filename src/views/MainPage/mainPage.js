import './mainPage.css';

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
      <nav>
        <ul>
          <li><a href="quiz-settings" data-name="StartQuiz">Start quiz</a></li>
          <li><a href="#" data-name="Leaderboard">Leaderboard </a></li>
          <li><a href="#" data-name="Adoption">Adoption </a></li>
          <li><a href="#" data-name="Credits">Credits</a></li>
        </ul>
      </nav>
    </div>

    <div class="info">

      <div class="bubbles">
        <div class="bubble fact">
          <img class="fact-img" src="http://placekitten.com/400/500" alt="the animal the sentence is about">
          <div class="fact-text">
            <h2>Did you know?</h2>
          </div>
        </div>

        <div class="bubble adoption">
          <img class="adoption-img" src="http://placekitten.com/300/400" alt="the animal to adoption">
          <div class="adoption-text">
            <h2>Or maybe you'd like to adopt your own pet?</h2>
            <p>This one is looking for home</p>
            <p>See more here: <a href="#">Adoption Page</a></p>
          </div>
        </div>
      </div>

      <div class="animal">
        <img src="src/public/kangoroo.png" alt="kangoroo that tells informations" /></div>
      </div>      

    </div>
  
  </div>
  `;

  const navContainer = document.querySelector('.navigation-container');
  const navItems = navContainer.querySelectorAll('a');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      alert(`Hello! I'm ${item.dataset.name} site`);
    });
  });
}

async function renderAnimalFact() {
  const factItem = document.querySelector('.fact-text');
  const factSentence = document.createElement('p');

  factSentence.innerText =
    "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.";
  factItem.append(factSentence);
}
