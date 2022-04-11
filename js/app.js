const navSlide = () => {
  const burger = document.querySelector('.menu-button');
  const nav = document.querySelector('.desktop-nav');

  burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  });
};

const app = () => {
  navSlide();
};

app();