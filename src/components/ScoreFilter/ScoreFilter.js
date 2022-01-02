import './ScoreFilter.css';

const settings = {
  ABOUT: 'default',
  TYPE: 'default',
  MIN: 1,
  MAX: 20,
};

export default function ScoreFilter() {
  const scoreFilter = document.createElement('div');
  scoreFilter.classList.add('score-filter');

  const dropdownAbout = Dropdown('about-dropdown', 'animal', 'cat', 'dog');
  const dropdownType = Dropdown('type-dropdown', 'quiz type', 'multiple choice', 'open');
  scoreFilter.append(dropdownAbout, dropdownType);

  const questionRange = RangeSelect();
  scoreFilter.appendChild(questionRange);

  const button = ClearButton();

  if (settings.ABOUT !== 'default' || settings.TYPE !== 'default' || settings.MIN !== 1 || settings.MAX !== 20) {
    scoreFilter.append(button);
  } else if (settings.ABOUT === 'default' && settings.TYPE === 'default' && settings.MIN === 1 && settings.MAX === 20) {
    scoreFilter.remove(button);
  }

  return scoreFilter;
}

function RangeSelect() {
  const range = document.createElement('div');
  range.classList.add('score-range');

  const label = document.createElement('label');
  label.innerHTML = 'Question number range';

  const labelMin = document.createElement('p');
  labelMin.innerHTML = 'Min';

  const inputMin = document.createElement('input');
  inputMin.type = 'number';
  inputMin.min = 0;
  inputMin.max = 20;

  const labelMax = document.createElement('p');
  labelMax.innerHTML = 'Max';
  const inputMax = document.createElement('input');
  inputMax.type = 'number';
  inputMax.min = 0;
  inputMax.max = 20;

  range.append(label, labelMin, inputMin, labelMax, inputMax);

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
  option1Setting.setAttribute('value', `${option2}`);
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
  });

  return button;
}
