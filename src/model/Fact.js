const FactDefaults = {
  FACT: "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.",
  IMG_URL: 'http://placekitten.com/400/500',
};

export default class Fact {
  _sentence = FactDefaults.FACT;

  get sentence() {
    return this._sentence;
  }
  set sentence(value) {
    this._sentence = value ? value : FactDefaults.FACT;
  }
}
