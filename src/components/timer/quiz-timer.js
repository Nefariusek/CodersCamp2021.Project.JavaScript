class QuizTimer {
  static createTimer() {
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

  static startTimer() {
    let minutes = 0,
      seconds = 0;
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    timer = setInterval(function () {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
        }
        min.innerHTML = minutes < 10 ? '0' + minutes : minutes;
      }
      sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
  }
}

export { QuizTimer };
