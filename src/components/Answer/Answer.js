import Question from '../../model/Question';

export default class Answer {
  timeOfAnswer;
  Question;
  lifelineUsed = false;

  static getScore() {
    return 1;
  }
}
