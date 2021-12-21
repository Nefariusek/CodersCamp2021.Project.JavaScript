const DEFAULT_FACT =
  "Cat's eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.";

export class Fact {
  _sentence = DEFAULT_FACT;

  get sentence() {
    return this._sentence;
  }
  set sentence(value) {
    this._sentence = value ? value : DEFAULT_FACT;
  }
}

export class ImageFact extends Fact {
  _pathOrUrl = 'http://placekitten.com/400/500';
  alt = 'the animal the sentence is about';

  get pathOrUrl() {
    return this._pathOrUrl;
  }

  set pathOrUrl(value) {
    this._pathOrUrl = value ? value : 'http://placekitten.com/400/500';
  }
}
