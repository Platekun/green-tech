import ScrollReveal from 'scrollreveal';

const SCROLL_OPTS = { reset: true };
const scrollReveal = ScrollReveal(SCROLL_OPTS);

const DURATION = 1000;
const SPACE = '10%';
const RIGHT = 'right';
const LEFT = 'left';

export const DEFAULT_OPTS = { duration: DURATION, scale: 0.7 };
export const LEFT_OPTS = { duration: DURATION, origin: LEFT, distance: SPACE };
export const RIGHT_OPTS = { duration: DURATION, origin: RIGHT, distance: SPACE };

export default (elements) =>
  elements.forEach((element) =>
      typeof element === 'string'
        ? scrollReveal.reveal(element)
        : scrollReveal.reveal(element.selector, element.opts)
  );
