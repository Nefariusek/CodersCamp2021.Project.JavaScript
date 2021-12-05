/* 
Component accepts following inputs: label (string), class (string), animate on hover (boolean)
Component has a light grey background and black text. When hovered, the background changes to dark grey and the label is white.
If animate on hover is true, the button will show an icon of Koala to the right of it
*/
import './buttonComponentStyles.css';

export default function createButton(label, classStyle, animate) {
  const koalaButton = document.createElement('div');
  koalaButton.classList.add('koala-button');

  const button = document.createElement('button');
  button.innerHTML = label;
  button.classList.add(classStyle);

  button.addEventListener('click', () => {
    console.log(`Greetings from koala in ${label}`);
  });

  koalaButton.append(button);

  if (animate) {
    const koala = document.createElement('img');
    koala.src = 'features/cute_koala.png';
    koala.classList.add('koala', 'hidden');
    koalaButton.append(koala);

    button.onmouseover = () => {
      koala.classList.remove('hidden');
    };
    button.onmouseout = () => {
      koala.classList.add('hidden');
    };
  }

  return koalaButton;
}
