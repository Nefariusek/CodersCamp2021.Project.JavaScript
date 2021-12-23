/*
Component creates speech bubble with or without image, with given header and optional sentences.
Component accepts following inputs: bubblePosition ("higher" or "lower"), hasImage (Boolean), header (String), sentences (optional, String or Array of Strings).
Input bubblePosition means that due to the "higher" or "lower" position of the bubble on the page, the arrow will be placed appropriately.
*/

import './Bubble.css';

/**
 * Component creates speech bubble with or without image, with given header and optional sentences.
 * Component accepts following inputs:
 * @param {string} bubblePosition - "higher" or "lower" means that due to the "higher" or "lower" position of the bubble on the page, the arrow will be placed appropriately.
 * @param {boolean} hasImage - whether the bubble will contain an image
 * @param {string} header - header text in bubble
 * @param {Array.<string>} sentences - optional additional sentences in the bubble
 **/
export default function Bubble(bubblePosition, hasImage = false, header, sentences = []) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble', bubblePosition);

  createImageContainer(bubble, hasImage);
  createTextContainer(bubble, header, sentences);

  return bubble;
}

function createImageContainer(bubble, hasImage) {
  if (hasImage) {
    const bubbleImgContainer = document.createElement('div');
    bubbleImgContainer.classList.add('bubble-img');
    bubble.append(bubbleImgContainer);
  } else {
    bubble.classList.add('no-image');
  }
}

function createTextContainer(bubble, header, sentences) {
  const bubbleTextContainer = document.createElement('div');
  bubbleTextContainer.classList.add('bubble-text');
  bubble.append(bubbleTextContainer);

  renderHeader(bubbleTextContainer, header);
  renderSentences(bubbleTextContainer, sentences);
}

function renderHeader(bubbleTextContainer, header) {
  const bubbleHeader = document.createElement('h2');
  bubbleHeader.innerText = header;
  bubbleTextContainer.append(bubbleHeader);
}

function renderSentences(bubbleTextContainer, sentences) {
  sentences.forEach((sentence) => {
    const bubbleTextLine = document.createElement('p');
    bubbleTextLine.innerHTML = sentence;
    bubbleTextContainer.append(bubbleTextLine);
  });
}
