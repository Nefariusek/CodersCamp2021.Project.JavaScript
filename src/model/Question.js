export default class Question {
  constructor(imageUrl, correct, incorrectAnswers, question) {
    this.imageUrl = imageUrl;
    this.correct = correct;
    this.incorrectAnswers = incorrectAnswers;
    this.question = question;
  }

  getAnswers() {
    const answers = [this.correct, ...this.incorrectAnswers];
    answers.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return answers;
  }
}
