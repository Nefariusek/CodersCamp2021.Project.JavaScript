export class Fact {
  constructor(sentence) {
    this.sentence = sentence;
  }

  get makeFact() {
    return this.sentence;
  }

  set makeFact(sentence) {
    this.sentence = sentence;
  }
}
