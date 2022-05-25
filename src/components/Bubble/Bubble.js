import './Bubble.css';

export default function Bubble(bubblePosition, header = '', sentences = [], hasImage = false) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble', bubblePosition);

  renderImageContainer(bubble, hasImage);
  renderTextContainer(bubble, header, sentences);

  return bubble;
}

function renderImageContainer(bubble, hasImage) {
  if (hasImage) {
    const bubbleImageContainer = document.createElement('div');
    bubbleImageContainer.classList.add('bubble-img');
    bubble.append(bubbleImageContainer);
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
