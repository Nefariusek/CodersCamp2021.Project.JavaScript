let timer;

export function createTimer() {
  const clock = document.createElement('div');
  clock.setAttribute('id', 'clock');

  const image = document.createElement('img');
  image.src = './timer.png';

  const minutes = document.createElement('span');
  minutes.setAttribute('id', 'timer-minutes');

  const colon = document.createElement('span');
  colon.innerText = ':';

  const seconds = document.createElement('span');
  seconds.setAttribute('id', 'timer-seconds');

  clock.appendChild(image);
  clock.appendChild(minutes);
  clock.appendChild(colon);
  clock.appendChild(seconds);

  return clock;
}

export function startTimer() {
  let minutes = 0;
  let seconds = 0;
  const min = document.getElementById('timer-minutes');
  const sec = document.getElementById('timer-seconds');

  min.innerText = '00';
  sec.innerText = '00';

  timer = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
      }
      min.innerText = timerDigits(minutes);
    }
    sec.innerText = timerDigits(seconds);
  }, 1000);
}

export function stopTimer() {
  const clk = document.getElementById('clock');
  clk.style.display = 'none';
  clearInterval(timer);
}

function timerDigits(time_value) {
  return time_value < 10 ? '0' + time_value : time_value;
}
