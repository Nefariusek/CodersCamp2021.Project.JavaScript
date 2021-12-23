const FactDefaults = {
  FACT: "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.",
  IMG_URL: 'http://placekitten.com/400/500',
};

export class Fact {
  _sentence = FactDefaults.FACT;

  get sentence() {
    return this._sentence;
  }
  set sentence(value) {
    this._sentence = value ? value : FactDefaults.FACT;
  }
}

export class ImageFact extends Fact {
  _pathOrUrl = FactDefaults.IMG_URL;
  alt = 'the animal the sentence is about';

  get pathOrUrl() {
    return this._pathOrUrl;
  }

  set pathOrUrl(value) {
    this._pathOrUrl = value ? value : FactDefaults.IMG_URL;
  }
}
