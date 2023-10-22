// burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  menu.classList.toggle('header__nav_active');
})