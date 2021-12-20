export class Fact {
  _sentence =
    "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.";
  url = 'http://placekitten.com/400/500';
  alt = 'the animal the sentence is about';

  get sentence() {
    return this._sentence; 
  }
  set sentence(value) {
    this._sentence = value
      ? value
      : "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.";
  }
}
