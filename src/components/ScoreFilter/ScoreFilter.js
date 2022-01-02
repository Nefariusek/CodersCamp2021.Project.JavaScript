import './ScoreFilter.css';

export default function ScoreFilter() {
  const scoreFilter = document.createElement('div');
  scoreFilter.classList.add('score-filter');

  const dropdown = Dropdown();
  scoreFilter.appendChild(dropdown);

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

function Dropdown() {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  const label = document.createElement('label');
  label.innerHTML = 'Filter results by:';
  label.setAttribute('for', 'settings');

  dropdown.appendChild(label);

  const select = document.createElement('select');
  select.setAttribute('name', 'settings');
  select.setAttribute('id', 'settings');

  const typeSetting = document.createElement('option');
  typeSetting.setAttribute('value', 'type-setting');
  typeSetting.innerHTML = 'Type';

  const aboutSetting = document.createElement('option');
  aboutSetting.setAttribute('value', 'about-setting');
  aboutSetting.innerHTML = 'About';

  select.append(typeSetting, aboutSetting);

  dropdown.append(select);

  return dropdown;
}
