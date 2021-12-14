/* how to use Question class Question has {imageUrl, correct, incorrectAnswers, question} and .getAnswers method

try this example: 
const firstQuestion = new Question(
  'url',
  'Ala',
  ['Ula', 'Ela', 'Ola'],
  "Mirror, mirror on the wall who's the fairest of them all?",
);

console.log(firstQuestion.question);
console.log(firstQuestion.getAnswers());
console.log('The correct answer is:');
setTimeout(() => console.log(firstQuestion.correct), 3000);
*/

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
