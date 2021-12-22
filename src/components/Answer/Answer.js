export default class Answer {
  constructor(timeOfAnswer, Question, answer, lifelineUsed, changed) {
    this.timeOfAnswer = timeOfAnswer;
    this.Question = Question;
    this.lifelineUsed = lifelineUsed;
    this.answer = answer;
    this.changed = changed;
  }

  checkIfCorrect() {
    return this.answer.toUpperCase() === this.Question.correct.toUpperCase();
  }

  getScore() {
    if (this.checkIfCorrect()) {
      if (this.changed) {
        return 0.5;
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  }
}
