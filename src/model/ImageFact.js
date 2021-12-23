import Fact from '../model/Question';

export default class ImageFact extends Fact {
  _pathOrUrl = FactDefaults.IMG_URL;
  alt = 'the animal the sentence is about';

  get pathOrUrl() {
    return this._pathOrUrl;
  }

  set pathOrUrl(value) {
    this._pathOrUrl = value ? value : FactDefaults.IMG_URL;
  }
}
