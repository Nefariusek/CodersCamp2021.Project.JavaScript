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
    let score = 0;
    if (this.checkIfCorrect()) {
      score = 1;
      if (this.changed) {
        score = score / 2;
      }
    }
    return score;
  }
}
