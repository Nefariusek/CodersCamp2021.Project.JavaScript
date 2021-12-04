/* 
Component accepts following inputs: label (string), class (string), animate on hover (boolean)
Component has a light grey background and black text. When hovered, the background changes to dark grey and the label is white.
If animate on hover is true, the button will show an icon of Koala to the right of it
*/
import './buttonComponentStyles.css';

export default function createButton(label, classStyle, animate) {
  const button = document.createElement('button');
  button.innerHTML = label;
  button.classList.add(classStyle);
  return button;
}
