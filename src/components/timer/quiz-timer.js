class QuizTimer {
  static showTimer() {
    const clock = document.createElement('div');
    clock.setAttribute('id', 'clock');

    const minutes = document.createElement('span');
    minutes.setAttribute('id', 'min');
    minutes.innerText = '00';

    const colon = document.createElement('span');
    colon.innerText = ':';

    const seconds = document.createElement('span');
    seconds.setAttribute('id', 'sec');
    seconds.innerText = '00';

    clock.appendChild(minutes);
    clock.appendChild(colon);
    clock.appendChild(seconds);

    return clock;
  }
}

export { QuizTimer };
