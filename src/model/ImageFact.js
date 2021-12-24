import Fact from '../model/Fact';

const ImageFactDefaults = {
  IMG_URL: 'http://placekitten.com/400/500',
  ALT: 'the animal the sentence is about',
};

export default class ImageFact extends Fact {
  _pathOrUrl = ImageFactDefaults.IMG_URL;
  _alt = ImageFactDefaults.ALT;

  get alt() {
    return this._alt;
  }

  set alt(value) {
    this._alt = value ? value : ImageFactDefaults.ALT;
  }

  get pathOrUrl() {
    return this._pathOrUrl;
  }

  set pathOrUrl(value) {
    this._pathOrUrl = value ? value : ImageFactDefaults.IMG_URL;
  }
}
