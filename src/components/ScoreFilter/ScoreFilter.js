import './ScoreFilter.css';

import Dropdown from '../Dropdown/Dropdown';
import RangeSelect from '../RangeSelect/RangeSelect';
import { getScoreFromLocalStorage, renderScores } from '../../views/Leaderboard/Leaderboard';

const DEFAULT_ABOUT = 'Select animal';
const DEFAULT_TYPE = 'Select quiz type';
export const DEFAULT_MIN = 1;
export const DEFAULT_MAX = 20;

export const settings = {
  about: DEFAULT_ABOUT,
  type: DEFAULT_TYPE,
  min: DEFAULT_MIN,
  max: DEFAULT_MAX,
};

export default function ScoreFilter() {
  const scoreFilter = document.createElement('div');
  scoreFilter.classList.add('score-filter');

  const dropListFilter = document.createElement('div');
  dropListFilter.classList.add('dropList-filter');
  scoreFilter.appendChild(dropListFilter);

  const button = ClearButton();

  const dropdownAbout = Dropdown('about-dropdown', DEFAULT_ABOUT, 'CATS', 'DOGS');
  const dropdownType = Dropdown('type-dropdown', DEFAULT_TYPE, 'MULTIPLE CHOICE', 'OPEN');
  dropListFilter.append(dropdownAbout, dropdownType);

  dropdownAbout.addEventListener('change', (e) => {
    settings.about = e.target.value;
    filterScores();
    scoreFilter.append(button);
  });
  dropdownType.addEventListener('change', (e) => {
    settings.type = e.target.value;
    filterScores();
    scoreFilter.append(button);
  });

  const minRange = RangeSelect('min');
  const maxRange = RangeSelect('max');

  scoreFilter.append(minRange, maxRange);

  minRange.addEventListener('change', (e) => {
    settings.min = e.target.value;
    filterScores();
    scoreFilter.append(button);
  });

  maxRange.addEventListener('change', (e) => {
    settings.max = e.target.value;
    filterScores();
    scoreFilter.append(button);
  });

  if (settings.about !== DEFAULT_ABOUT || settings.type !== DEFAULT_TYPE || settings.min !== 1 || settings.max !== 20) {
    scoreFilter.append(button);
  }

  return scoreFilter;
}

function ClearButton() {
  const button = document.createElement('button');
  button.setAttribute('id', 'clearFilterBtn');
  button.innerHTML = 'clear filters';
  button.addEventListener('click', () => {
    settings.about = DEFAULT_ABOUT;
    settings.type = DEFAULT_TYPE;
    settings.min = DEFAULT_MIN;
    settings.max = DEFAULT_MAX;
    filterScores();

    const dropdowns = document.querySelectorAll('select');
    dropdowns.forEach((select) => {
      select.selectedIndex = 0;
    });

    const minRange = document.querySelector('.min');
    minRange.value = DEFAULT_MIN;

    const maxRange = document.querySelector('.max');
    maxRange.value = DEFAULT_MAX;

    button.remove();
  });

  return button;
}

function filterScores() {
  const scores = getScoreFromLocalStorage();
  const filters = [filterAbout, filterType, filterQuestionNumber];
  const filteredScores = scores.filter((score) => filters.every((filter) => filter(score)));
  // const filteredScores = scores.filter(
  //   (item) =>
  //     item.ABOUT === settings.about &&
  //     item.TYPE === settings.type &&
  //     item.NUMBER >= settings.min &&
  //     item.NUMBER <= settings.max,
  // );
  renderScores(filteredScores);
}

function filterAbout(item) {
  if (settings.about === DEFAULT_ABOUT) {
    return item;
  }
  return item.ABOUT === settings.about;
}

function filterType(item) {
  if (settings.type === DEFAULT_TYPE) {
    return item;
  }
  return item.TYPE === settings.type;
}

function filterQuestionNumber(item) {
  if (item.NUMBER >= settings.min && item.NUMBER <= settings.max) {
    return item;
  }
  return false;
}
