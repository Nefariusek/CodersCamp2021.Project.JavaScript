import Button from '../../components/Button/Button';
import Bubble from '../../components/Bubble/Bubble';

const PAGE_TITLE = 'CREDITS';
const MAIN_ANIMAL_IMG = { pathOrUrl: '../kangoroo.png', alt: 'kangoroo that tells informations' };
const CreditsBubbleContent = {
  HEADER_TEXT: 'This is our first project of Coders Camp 2021',
  SENTENCE: 'Meet our whole team',
};
const AUTHORS = [
  { name: 'Szymon', role: 'mentor', githubUrl: 'https://github.com/Nefariusek' },
  { name: 'Grzegorz', role: 'author', githubUrl: 'https://github.com/GRosza' },
  { name: 'Maria', role: 'author', githubUrl: 'https://github.com/MariaBanaszkiewicz' },
  { name: 'Natalia', role: 'author', githubUrl: 'https://github.com/NataliaCichonska' },
  { name: 'Sylwia', role: 'author', githubUrl: 'https://github.com/mngweb' },
  { name: 'Ula', role: 'author', githubUrl: 'https://github.com/Urszuja' },
];

export function renderCreditsPage() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.classList.add('credits-page');

  const header = renderHeader();
  const credits = renderCredits();
  const infoSpace = renderInfoSpace();
  container.append(header, credits, infoSpace);

  document.querySelector('#app').append(container);
}

function renderHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  const headerText = document.createElement('h1');
  headerText.innerText = PAGE_TITLE;
  header.append(headerText);

  return header;
}

function renderCredits() {
  const credits = document.createElement('div');
  credits.classList.add('navigation-container');

  AUTHORS.forEach((author) => {
    const button = Button(author.name, author.role, false, 'click', onAuthorClick);
    credits.append(button);
  });
  const goToMainPage = Button('Main page', 'go-home', false, 'click', onAuthorClick);
  credits.append(goToMainPage);

  return credits;
}

const onAuthorClick = (e) => {
  if (e.target.className === 'go-home') {
    window.location.hash = '';
  } else {
    const arrayIndex = getButtonIndexFromParent('navigation-container', e.target);
    window.open(AUTHORS[arrayIndex].githubUrl, '_blank');
  }
};

function getButtonIndexFromParent(parentClass, button) {
  const parent = document.getElementsByClassName(parentClass)[0];
  const buttonWrapper = button.parentNode;
  const arrayIndex = Array.from(parent.children).indexOf(buttonWrapper);
  return arrayIndex;
}

function renderInfoSpace() {
  const infoSpace = document.createElement('div');
  infoSpace.classList.add('info');

  const infoBubbles = renderBubbles(infoSpace);
  const infoAnimal = renderAnimal(infoSpace);
  infoSpace.append(infoBubbles, infoAnimal);

  return infoSpace;
}

function renderBubbles() {
  const infoBubbles = document.createElement('div');
  infoBubbles.classList.add('bubbles');

  const infoBubble = Bubble('higher', CreditsBubbleContent.HEADER_TEXT, [CreditsBubbleContent.SENTENCE], false);
  infoBubbles.append(infoBubble);

  return infoBubbles;
}

function renderAnimal() {
  const infoAnimal = document.createElement('div');
  infoAnimal.classList.add('animal');

  const infoImg = document.createElement('img');
  infoImg.src = MAIN_ANIMAL_IMG.pathOrUrl;
  infoImg.alt = MAIN_ANIMAL_IMG.alt;
  infoAnimal.append(infoImg);

  return infoAnimal;
}
