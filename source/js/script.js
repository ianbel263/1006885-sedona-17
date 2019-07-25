var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.page-header__button');

  navMain.classList.remove('main-nav--nojs');
  navToggle.classList.remove('page-header__button--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navToggle.classList.remove('page-header__button--menu-closed');
      navToggle.classList.add('page-header__button--menu-opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navToggle.classList.add('page-header__button--menu-closed');
      navToggle.classList.remove('page-header__button--menu-opened');
    }
  });
