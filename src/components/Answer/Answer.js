export default class Answer {
  constructor(index, timeOfAnswer, question, answer, lifelineUsed, changed) {
    this.timeOfAnswer = timeOfAnswer;
    this.question = question;
    this.lifelineUsed = lifelineUsed;
    this.answer = answer;
    this.changed = changed;
    this.index = index;
  }

  checkIfCorrect() {
    return this.answer.toUpperCase() === this.question.correct.toUpperCase();
  }

  getScore() {
    let score = 0;
    if (this.checkIfCorrect()) {
      score = 1;
      if (this.changed) {
        score /= 2;
      }
    }
    return score;
  }
}
