const navSlide = () => {
  const burger = document.querySelector('.menu-button');
  const nav = document.querySelector('.desktop-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const projectCards = document.querySelector('[data-project-container]');
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const projects = {
  name: 'Project name goes here',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  image_1: 'Rectangle%2034.svg',
  image_2: 'Rectangle%2039.svg',
  image_3: 'Rectangle%2040.svg',
  image_4: 'Rectangle%2041.svg',
  image_5: 'Rectangle%2042.svg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n'
    + '\n'
    + 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  live_link: '#',
  repo: '#',
};
const mobileProjects = [{
  imageClass: 'computer-image',
  name: 'Project name goes here',
  project: 'project-section',
  grid: 'grid-container',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  modalLink: '#modal',
},
{
  imageClass: 'macbook-image',
  name: 'Project name goes here',
  project: 'project-section-1',
  grid: 'grid-container-1',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  modalLink: '#modal',
},
{
  imageClass: 'mac-iphone-image',
  name: 'Project name goes here',
  project: 'project-section-2',
  grid: 'grid-container-2',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  modalLink: '#modal',
},
{
  imageClass: 'mac-right-image',
  name: 'Project name goes here',
  project: 'project-section-3',
  grid: 'grid-container-3',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  modalLink: '#modal',
},
{
  imageClass: 'mac-left-image',
  name: 'Project name goes here',
  project: 'project-section-4',
  grid: 'grid-container-4',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  modalLink: '#modal',
},
{
  imageClass: 'mac-pink',
  name: 'Project name goes here',
  project: 'project-section-5',
  grid: 'grid-container-5',
  languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
  modalLink: '#modal',
},
];

const popup = () => {
  document.querySelector('[data-title]').innerHTML = projects.name;
  document.querySelector('#image-1').setAttribute('src', `../img/modals/${projects.image_1}`);
  document.querySelector('#image-2').setAttribute('src', `../img/modals/${projects.image_2}`);
  document.querySelector('#image-3').setAttribute('src', `../img/modals/${projects.image_3}`);
  document.querySelector('#image-4').setAttribute('src', `../img/modals/${projects.image_4}`);
  document.querySelector('#image-5').setAttribute('src', `../img/modals/${projects.image_5}`);

  const [htmlCss, rubyRails, jScript] = projects.languages;
  document.querySelector('[data-html-css]').textContent = htmlCss;
  document.querySelector('[data-ruby-rails]').textContent = rubyRails;
  document.querySelector('[data-javascript]').textContent = jScript;

  document.querySelector('[data-description]').textContent = projects.description;
  document.querySelectorAll('[data-see-live]').forEach((alink) => alink.setAttribute('href', projects.live_link));
  document.querySelectorAll('[data-see-source]').forEach((alink) => alink.setAttribute('href', projects.repo));
};

function createCard(cardObject) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<div class="container">
  <div class="${cardObject.imageClass}"></div>
  <div class="${cardObject.project}"><h2>${cardObject.name}</h2></div>
  <div class="${cardObject.grid}">
  <div class="html-css-rectangle"><p>HTML/CSS</p></div>
  <div class="ruby-rails-rectangle"><p>Ruby on Rails</p></div>
  <div class="javascript-rectangle"><p>Javascript</p></div>
  <button data-modal-target="#modal" type="button" class="see-project">See this project</button>
  <div class="arrow"></div>
  </div>`;
  return div;
}

mobileProjects.forEach((project) => {
  const card = createCard(project);
  projectCards.appendChild(card);
});

const openModalButtons = document.querySelectorAll('[data-modal-target]');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  popup();
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    scrollTop();
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

const form = document.querySelector('[data-form]');
const email = document.getElementById('list-email');

function validate(e) {
  if (!e) {
    document.querySelector('small').style = 'display: flex';
    document.querySelector('small').innerHTML = 'Resubmit your email address in lowercase.';
    document.querySelector('list-email').style = 'background-color: #fdd;';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    validate(false);
    return;
  }
  form.submit();
  form.reset();
  validate(true);
});

const app = () => {
  navSlide();
};

app();