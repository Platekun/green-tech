(function () {
  window.onload = function () {
    setupCarousel();
    setupScrollReveal();
    setupNavigationDrawer();
    setupNavigationDrawerMenu();
  }

  function setupCarousel() {
    var presentationalCarousel = document.querySelector('#presentation-carousel');
    var usefulInfoCarousel = document.querySelector('#useful-info-carousel');

    new Flickity(presentationalCarousel, {
      cellAlign: 'left',
      autoplay: true,
      imagesLoaded: true
    });

    new Flickity(usefulInfoCarousel, {
      cellAlign: 'left',
      autoplay: true,
      imagesLoaded: true
    });
  }

  function setupScrollReveal() {
    var scroll = ScrollReveal({ reset: true });
    var duration = 1000;
    var reviewDistance = '10%';
    var defaultOpts = { duration: duration, scale: 0.7 };
    var leftOpts = { duration: duration, origin: 'left', distance: reviewDistance };
    var rightOpts = { duration: duration, origin: 'right', distance: reviewDistance };

    scroll.reveal('#services');
    scroll.reveal('#useful-info-carousel', defaultOpts);
    scroll.reveal('.review-even', leftOpts);
    scroll.reveal('.review-odd', rightOpts);
    scroll.reveal('.featured-review', defaultOpts);
  }

  function setupNavigationDrawer() {
    var hamburguerMenu = document.querySelector('#hamburguerMenu');

    var showNavigationDrawer = function (evt) {
      var mainContentFilter = document.querySelector('#main-content-layer');
      var navigationDrawer = document.querySelector('#navigation-drawer');

      var isNavigationDrawerShowing = mainContentFilter.classList.contains('inactive-content');

      if (isNavigationDrawerShowing) {
        navigationDrawer.style.marginLeft = '-100%';
        mainContentFilter.classList.remove('inactive-content');
      } else {
        navigationDrawer.style.marginLeft = '0%';
        mainContentFilter.classList.add('inactive-content');
      }
    };

    hamburguerMenu.addEventListener('click', showNavigationDrawer);
  }

  function setupNavigationDrawerMenu() {
    var categories = document.querySelectorAll('.navigation-drawer-list > li');

    var showSubCategories = function (evt) {
      var subCategoryList = this.nextElementSibling;
      var collapsed = subCategoryList.classList.contains('visuallyhidden');

      if (collapsed) {
        subCategoryList.classList.remove('visuallyhidden');
      } else {
        subCategoryList.classList.add('visuallyhidden');
      }
    };

    categories.forEach(function(category) {
      var hasNextSibling = category.nextElementSibling;

      if (hasNextSibling) {
        var hasSubCategory = category.nextElementSibling.tagName.toLowerCase() === "ul";

        if (hasSubCategory) {
          category.addEventListener('click', showSubCategories);
        }
      }
    });
  }
})();
