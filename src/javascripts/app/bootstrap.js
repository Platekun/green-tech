import 'jquery';
import '../../stylesheets/bootstrap.scss';
import revealOnScroll, { RIGHT_OPTS, LEFT_OPTS, DEFAULT_OPTS } from './setupScrollReveal';
import setupCarousel from './setupCarousels';
import makeSetupNatigationDrawer from './makeSetupNatigationDrawer';
import setupNavigationDrawerMenu from './setupNavigationDrawerMenu';
import injectReviews from './injectReviews';
import injectTips from './injectTips';
import injectSocialMediaLinks from './injectSocialMediaLinks';
import injectNavBarItems from './injectNavBarItems';
import injectStats from './injectStats';
import injectCertifications from './injectCertifications';
import injectNavigationDrawer from './injectNavigationDrawer';

export default () => {
  injectNavigationDrawer(document.querySelector('[data-target="navigation-drawer"]'))
  injectReviews(document.querySelector('[data-target="reviews"]'));
  injectStats(document.querySelector('[data-target="stats"]'))
  injectTips(document.querySelector('[data-target="tips"]'));
  injectNavBarItems(document.querySelector('[data-target="nav-menu"]'));
  injectSocialMediaLinks([
    ...document.querySelectorAll('[data-target="contact"]'),
  ]);
  injectCertifications(document.querySelector('[data-target="certifications"]'));
  revealOnScroll([
    '[data-target="services"]',
    { selector: '[data-target="tips-carousel"]', opts: DEFAULT_OPTS },
    { selector: '[data-target="even-review"]', opts: LEFT_OPTS },
    { selector: '[data-target="odd-review"]', opts: RIGHT_OPTS },
    { selector: '[data-target="featured-review"]', opts: DEFAULT_OPTS }
  ]);
  setupCarousel([
    document.querySelector('[data-target="introduction-carousel"]'),
    document.querySelector('[data-target="tips-carousel"]')
  ]);
  makeSetupNatigationDrawer(
    document.querySelector('[data-target="main-overlay"]'),
    document.querySelector('[data-target="navigation-drawer"]'),
  )(document.querySelector('[data-target="navigation-drawer-toggler"]'));
  setupNavigationDrawerMenu(document.querySelectorAll('[data-target="navigation-drawer-category"]'));
};
