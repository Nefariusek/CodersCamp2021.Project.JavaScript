import './Bubble.css';

/**
 * Component creates speech bubble with or without image, with given header and optional sentences.
 * Component accepts following inputs:
 * @param {string} bubblePosition - "higher" or "lower" means that due to the "higher" or "lower" position of the bubble on the page, the arrow will be placed appropriately.
 * @param {boolean} hasImage - whether the bubble will contain an image
 * @param {string} header - header text in bubble
 * @param {Array.<string>} sentences - optional additional sentences in the bubble
 */
export default function Bubble(bubblePosition, header, sentences = [], hasImage = false) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble', bubblePosition);

  renderImageContainer(bubble, hasImage);
  renderTextContainer(bubble, header, sentences);

  return bubble;
}

function renderImageContainer(bubble, hasImage) {
  if (hasImage) {
    const bubbleImgContainer = document.createElement('div');
    bubbleImgContainer.classList.add('bubble-img');
    bubble.append(bubbleImgContainer);
  } else {
    bubble.classList.add('no-image');
  }
}

function renderTextContainer(bubble, header, sentences) {
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
