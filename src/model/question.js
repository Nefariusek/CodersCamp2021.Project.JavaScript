export default class Question {
  constructor(imageUrl, correct, incorrectAnswers, question) {
    this.imageUrl = imageUrl;
    this.correct = correct;
    this.incorrectAnswers = incorrectAnswers;
    this.question = question;
  }

  /*getAnswers = () => {
    return this.randomAnswers();
  }; 

  randomAnswers() {
    shuffleArray = (array) => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const answers = [this.correct, ...this.incorrectAnswers];
    const mixedAnswers = shuffleArray(answers);
    return mixedAnswers;
  }
  */
}
