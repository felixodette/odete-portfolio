const navSlide = () => {
  const burger = document.querySelector('.menu-button');
  const nav = document.querySelector('.desktop-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const projects = {
  name: 'Project name goes here',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  image_1: 'Rectangle%2034.svg',
  image_2: 'Rectangle%2039.svg',
  image_3: 'Rectangle%2040.svg',
  image_4: 'Rectangle%2041.svg',
  image_5: 'Rectangle%2042.svg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n' +
    '                    <br>\n' +
    '                    <br>\n' +
    '                    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  live_link: '#',
  repo: '#'
};

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
  popup();
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const popup = () => {
  document.querySelector('[data-title]').innerHTML = projects.name;
  document.querySelector('#image-1').setAttribute('src', `../img/modals/${projects.image_1}`);
  document.querySelector('#image-2').setAttribute('src', `../img/modals/${projects.image_2}`);
  document.querySelector('#image-3').setAttribute('src', `../img/modals/${projects.image_3}`);
  document.querySelector('#image-4').setAttribute('src', `../img/modals/${projects.image_4}`);
  document.querySelector('#image-5').setAttribute('src', `../img/modals/${projects.image_5}`);

  document.querySelector('[data-html-css]').textContent = projects.languages[0];
  document.querySelector('[data-ruby-rails]').textContent = projects.languages[1];
  document.querySelector('[data-javascript]').textContent = projects.languages[2];

  document.querySelector('[data-description]').textContent = projects.description;
  document.querySelectorAll('[data-see-live]').forEach((alink) => alink.setAttribute('href', projects.live_link));
  document.querySelectorAll('[data-see-source]').forEach((alink) => alink.setAttribute('href', projects.repo));
}

const app = () => {
  navSlide();
};

app();