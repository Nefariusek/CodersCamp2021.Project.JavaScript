import './Dropdown.css';

export default function Dropdown(className, dropdownLabel, option1, option2) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('custom-select');
  dropdown.classList.add(className);

  const select = document.createElement('select');
  select.setAttribute('name', 'settings');
  select.setAttribute('id', 'settings');

  const defaultSetting = document.createElement('option');
  defaultSetting.setAttribute('value', dropdownLabel);
  defaultSetting.innerHTML = dropdownLabel;

  const option1Setting = document.createElement('option');
  option1Setting.setAttribute('value', `${option1}`);
  option1Setting.innerHTML = option1.toLowerCase();

  const option2Setting = document.createElement('option');
  option2Setting.setAttribute('value', `${option2}`);
  option2Setting.innerHTML = option2.toLowerCase();

  select.append(defaultSetting, option1Setting, option2Setting);
  dropdown.append(select);

  return dropdown;
}
