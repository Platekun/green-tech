import Flickity from 'flickity';
import 'flickity/dist/flickity.css';

const CAROUSEL_OPTS = {
  cellAlign: 'left',
  autoplay: true,
  imagesLoaded: true
};

export default (elements) => elements.map((element) => new Flickity(element, CAROUSEL_OPTS));
