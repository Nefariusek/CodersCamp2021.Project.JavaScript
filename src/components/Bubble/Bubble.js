/*
Component creates speech bubble with or without image, with given header and optional sentences.
Component accepts following inputs: bubblePosition ("higher" or "lower"), hasImage (Boolean), header (String), sentences (optional, String or Array of Strings).
Input bubblePosition means that due to the "higher" or "lower" position of the bubble on the page, the arrow will be placed appropriately.
*/

import './Bubble.css';

export default function Bubble(bubblePosition, hasImage = false, header, sentences = '') {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble', bubblePosition);

  // image
  if (hasImage) {
    const bubbleImgContainer = document.createElement('div');
    bubbleImgContainer.classList.add('bubble-img');
    bubble.append(bubbleImgContainer);
  } else {
    bubble.classList.add('no-image');
  }

  // text container
  const bubbleTextContainer = document.createElement('div');
  bubbleTextContainer.classList.add('bubble-text');
  bubble.append(bubbleTextContainer);

  // header
  const bubbleHeader = document.createElement('h2');
  bubbleHeader.innerText = header;
  bubbleTextContainer.append(bubbleHeader);

  // sentence or sentences
  if (typeof sentences === 'string') {
    const bubbleTextLine = document.createElement('p');
    bubbleTextLine.innerHTML = sentences;
    bubbleTextContainer.append(bubbleTextLine);
  } else if (Array.isArray(sentences) && sentences.length) {
    for (let i = 0; i < sentences.length; i++) {
      const bubbleTextLine = document.createElement('p');
      bubbleTextLine.innerHTML = sentences[i];
      bubbleTextContainer.append(bubbleTextLine);
    }
  }

  return bubble;
}
