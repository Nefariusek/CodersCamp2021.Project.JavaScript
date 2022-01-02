import './ScoreFilter.css';

export default function ScoreFilter() {
  const scoreFilter = document.createElement('div');
  scoreFilter.classList.add('score-filter');

  const label = document.createElement('label');
  label.innerHTML = 'Filter results by:';
  label.setAttribute('for', 'settings');

  scoreFilter.appendChild(label);

  const dropdown = document.createElement('select');
  dropdown.setAttribute('name', 'settings');
  dropdown.setAttribute('id', 'settings');

  const typeSetting = document.createElement('option');
  typeSetting.setAttribute('value', 'type-setting');
  typeSetting.innerHTML = 'Type';

  const aboutSetting = document.createElement('option');
  aboutSetting.setAttribute('value', 'about-setting');
  aboutSetting.innerHTML = 'About';

  dropdown.append(typeSetting, aboutSetting);
  scoreFilter.appendChild(dropdown);
  /*
<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/

  return scoreFilter;
}
