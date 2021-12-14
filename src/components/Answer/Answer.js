import Question from '../../model/question';

export default class Answer {
  timeOfAnswer;
  Question;
  lifelineUsed = false;

  static getScore() {
    return 1;
  }
}
