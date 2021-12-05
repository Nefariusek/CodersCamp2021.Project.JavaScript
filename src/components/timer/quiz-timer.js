var timer;

export function createTimer() {
  const clock = document.createElement('div');
  clock.setAttribute('id', 'clock');

  const image = document.createElement('img');
  image.setAttribute('id', 'clk_img');
  image.src = '/timer.png';

  const minutes = document.createElement('span');
  minutes.setAttribute('id', 'min');
  minutes.innerText = '00';

  const colon = document.createElement('span');
  colon.innerText = ':';

  const seconds = document.createElement('span');
  seconds.setAttribute('id', 'sec');
  seconds.innerText = '00';

  clock.appendChild(image);
  clock.appendChild(minutes);
  clock.appendChild(colon);
  clock.appendChild(seconds);

  return clock;
}

export function startTimer() {
  let minutes = 0,
    seconds = 0;
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');

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
      min.innerText = minutes < 10 ? '0' + minutes : minutes;
    }
    sec.innerText = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

export function stopTimer() {
  const clk = document.getElementById('clock');
  clk.style.display = 'none';
  clearInterval(timer);
}
