import './ScoreFilter.css';

export const settings = {
  ABOUT: 'default',
  TYPE: 'default',
  MIN: 1,
  MAX: 20,
};

export default function ScoreFilter() {
  const scoreFilter = document.createElement('div');
  scoreFilter.classList.add('score-filter');

  const button = ClearButton();

  const dropdownAbout = Dropdown('about-dropdown', 'animal', 'cats', 'dogs');
  const dropdownType = Dropdown('type-dropdown', 'quiz type', 'multiple choice', 'open');
  scoreFilter.append(dropdownAbout, dropdownType);

  dropdownAbout.addEventListener('change', (e) => {
    settings.ABOUT = e.target.value.toUpperCase();
    // new settings
    filterScores();
    scoreFilter.append(button);
  });
  dropdownType.addEventListener('change', (e) => {
    settings.TYPE = e.target.value.toUpperCase();
    filterScores();
    scoreFilter.append(button);
  });

  const minRange = RangeSelect('min');
  const maxRange = RangeSelect('max');

  scoreFilter.append(minRange, maxRange);

  minRange.addEventListener('change', (e) => {
    settings.MIN = e.target.value;
    console.log('changing min', settings);
    scoreFilter.append(button);
  });

  maxRange.addEventListener('change', (e) => {
    settings.MAX = e.target.value;
    console.log('changing max', settings);
    scoreFilter.append(button);
  });

  if (settings.ABOUT !== 'default' || settings.TYPE !== 'default' || settings.MIN !== 1 || settings.MAX !== 20) {
    scoreFilter.append(button);
  }

  return scoreFilter;
}

function RangeSelect(labelName) {
  const range = document.createElement('div');
  const label = document.createElement('p');
  label.innerHTML = labelName;

  const input = document.createElement('input');
  input.type = 'number';
  input.min = 0;
  input.max = 20;

  range.append(label, input);

  return range;
}

function Dropdown(className, dropdownLabel, option1, option2) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('custom-select');
  dropdown.classList.add(className);

  const select = document.createElement('select');
  select.setAttribute('name', 'settings');
  select.setAttribute('id', 'settings');

  const defaultSetting = document.createElement('option');
  defaultSetting.setAttribute('value', 'default');
  defaultSetting.innerHTML = `Select ${dropdownLabel}`;

  const option1Setting = document.createElement('option');
  option1Setting.setAttribute('value', `${option1}`);
  option1Setting.innerHTML = option1;

  const option2Setting = document.createElement('option');
  option2Setting.setAttribute('value', `${option2}`);
  option2Setting.innerHTML = option2;

  select.append(defaultSetting, option1Setting, option2Setting);
  dropdown.append(select);

  return dropdown;
}

function ClearButton() {
  const button = document.createElement('button');
  button.innerHTML = 'clear filters';
  button.addEventListener('click', () => {
    settings.ABOUT = 'default';
    settings.TYPE = 'default';
    settings.MIN = 1;
    settings.MAX = 20;

    const dropdowns = document.querySelectorAll('select');
    // eslint-disable-next-line no-return-assign
    dropdowns.forEach((select) => (select.selectedIndex = 0));

    button.remove();
  });

  return button;
}

function filterScores() {
  const scores = getScoreFromLocalStorage();
  const filteredScores = scores.filter(filterAbout).filter(filterType);
  console.log(scores);
  console.log(filteredScores);
  return filteredScores;
}

function filterAbout(item) {
  if (settings.ABOUT === 'default') {
    return item;
  }
  return item.ABOUT === settings.ABOUT;
}

function filterType(item) {
  if (settings.TYPE === 'default') {
    return item;
  }
  return item.TYPE === settings.TYPE;
}

function getScoreFromLocalStorage() {
  const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.sort((a, b) => b.SCORE - a.SCORE);
  return scores;
}
