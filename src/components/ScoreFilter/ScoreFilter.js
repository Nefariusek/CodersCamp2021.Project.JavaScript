import './ScoreFilter.css';

export default function ScoreFilter() {
  const scoreFilter = document.createElement('div');
  scoreFilter.classList.add('score-filter');

  const dropdownAbout = Dropdown('about-dropdown', 'animal species', 'cat', 'dog');
  const dropdownType = Dropdown('type-dropdown', 'quiz type', 'multiple choice', 'open');
  scoreFilter.append(dropdownAbout, dropdownType);

  const questionRange = RangeSelect();
  scoreFilter.appendChild(questionRange);

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

  const labelMax = document.createElement('p');
  labelMax.innerHTML = 'Max';
  const inputMax = document.createElement('input');
  inputMax.type = 'number';

  range.append(label, labelMin, inputMin, labelMax, inputMax);

  return range;
}

function Dropdown(className, dropdownLabel, option1, option2) {
  const dropdown = document.createElement('div');
  dropdown.classList.add(className);

  const label = document.createElement('label');
  label.innerHTML = `Sort by ${dropdownLabel}`;
  label.setAttribute('for', 'settings');

  dropdown.appendChild(label);

  const select = document.createElement('select');
  select.setAttribute('name', 'settings');
  select.setAttribute('id', 'settings');

  const defaultSetting = document.createElement('option');
  defaultSetting.setAttribute('value', 'all');
  defaultSetting.innerHTML = 'all';

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
