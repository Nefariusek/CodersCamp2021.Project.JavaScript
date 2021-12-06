/* 
Component accepts following inputs: label (string), class (string), animate on hover (boolean)
Component has a light grey background and black text. When hovered, the background changes to dark grey and the label is white.
If animate on hover is true, the button will show an icon of Koala to the right of it
*/
import './Button.css';

const addKoala = () => {
  const koala = document.createElement('img');
  koala.src = '/cute_koala.png';
  koala.classList.add('koala', 'hidden');
  button.after(koala);

  button.onmouseover = () => {
    koala.classList.remove('hidden');
  };
  button.onmouseout = () => {
    koala.classList.add('hidden');
  };
};

export default function Button(label, className, animate, eventListener, callback) {
  const button = document.createElement('button');
  button.innerHTML = label;
  button.classList.add(className);

  button.addEventListener(eventListener, callback);

  animate && addKoala();

  return button;
}
