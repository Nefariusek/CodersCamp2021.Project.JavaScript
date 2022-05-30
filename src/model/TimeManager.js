class TimeManager {
  static instance;

  minutes;

  seconds;

  interval;

  constructor() {
    this.resetTimer();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new TimeManager();
    }

    return this.instance;
  }

  resetTimer() {
    this.minutes = 0;
    this.seconds = 0;
  }
}
const timeManager = TimeManager.getInstance();
export default timeManager;
