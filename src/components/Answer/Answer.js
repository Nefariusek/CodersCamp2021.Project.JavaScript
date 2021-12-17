import Question from '../../model/question';

export default class Answer {
  constructor(timeOfAnswer, Question, answer, lifelineUsed) {
    this.timeOfAnswer = timeOfAnswer;
    this.Question = Question;
    this.lifelineUsed = lifelineUsed;
    this.answer = answer;
  }

  corectnessCheck() {
    if (this.answer === this.Question.correct.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }

  static getScore() {
    return 1;
  }
}
