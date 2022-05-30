import './QuizTimer.css';
import timeManager from '../../model/TimeManager';

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
  timeManager.resetTimer();
  const min = document.getElementById('timer-minutes');
  const sec = document.getElementById('timer-seconds');

  min.innerText = '00';
  sec.innerText = '00';

  timeManager.interval = setInterval(() => {
    timeManager.seconds++;
    if (timeManager.seconds === 60) {
      timeManager.seconds = 0;
      timeManager.minutes++;
      if (timeManager.minutes === 60) {
        timeManager.minutes = 0;
      }
      min.innerText = timerDigits(timeManager.minutes);
    }
    sec.innerText = timerDigits(timeManager.seconds);
  }, 1000);
}

export function stopTimer() {
  const clk = document.getElementById('clock');
  clk.style.display = 'none';
  clearInterval(timeManager.interval);
}

function timerDigits(timeValue) {
  return timeValue < 10 ? `0${timeValue}` : timeValue;
}
