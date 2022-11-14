// Слайдер
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// Табы
const tabsBtns = document.querySelectorAll('.job__btn');
const tabsItems = document.querySelectorAll('.job-right');
const tabsItemsText = document.querySelectorAll('.job-left');

tabsBtns.forEach( el => {
  el.addEventListener('click', evt => {
    const path = evt.currentTarget.dataset.path;

    tabsBtns.forEach(btn => {
      btn.classList.remove('job__btn_active');
    })

    evt.currentTarget.classList.add('job__btn_active');

    tabsItems.forEach(el => {
      el.classList.remove('job-right_active');
    })

    tabsItemsText.forEach(el => {
      el.classList.remove('job-left_active');
    })

    document.querySelector(`[data-right-target="${path}"]`).classList.add('job-right_active');
    document.querySelector(`[data-left-target="${path}"]`).classList.add('job-left_active');
  });
});

// Аккордеон
new Accordion('.accordion');

// Бургер
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header .nav');
const closeBtn = document.querySelector('.nav__btn');
const menuLinks = menu.querySelectorAll('.nav__link');

function closeBurger () {
  menu.classList.remove('nav_active');
  document.body.classList.remove('stop-scroll');
  closeBtn.removeEventListener('click', closeBurger);
}

menuLinks.forEach( el => {
  el.addEventListener('click', closeBurger)
})

burger.addEventListener('click', () => {
  menu.classList.add('nav_active');
  document.body.classList.add('stop-scroll');

  closeBtn.addEventListener('click', closeBurger);
})

// Форма поиска
const form = document.querySelector('.search-form');
const formOpenBtn = document.querySelector('.header__btn');
const formCloseBtn = document.querySelector('.search-form__btn-close');

function closeForm () {
  form.classList.remove('search-form_active');

  formCloseBtn.removeEventListener('click', closeForm);
}

function openForm () {
  form.classList.add('search-form_active');

  formCloseBtn.addEventListener('click', closeForm);
}

formOpenBtn.addEventListener('click', openForm);
