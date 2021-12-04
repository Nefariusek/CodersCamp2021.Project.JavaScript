import './style.css';
import createButton from '../features/buttonComponent.js';

document.querySelector('#app').innerHTML = `
  <h1>CC first project</h1>
`;

const button1 = createButton('hello', 'sth', false);

document.querySelector('#app').appendChild(button1);
