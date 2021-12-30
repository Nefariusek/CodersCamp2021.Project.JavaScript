const DEFAULT_FACT =
  "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.";

export default class Fact {
  _sentence = DEFAULT_FACT;

  get sentence() {
    return this._sentence;
  }

  set sentence(value) {
    this._sentence = value || DEFAULT_FACT;
  }
}
