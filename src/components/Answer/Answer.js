import Question from '../../model/question';

export default class Answer {
  constructor(timeOfAnswer, Question, answer, lifelineUsed) {
    this.timeOfAnswer = timeOfAnswer;
    this.Question = Question;
    this.lifelineUsed = lifelineUsed;
    this.answer = answer;
  }

  checkIfCorrect() {
    return this.answer.toUpperCase() === this.Question.correct.toUpperCase();
  }

  static getScore() {
    return 1;
  }
}
