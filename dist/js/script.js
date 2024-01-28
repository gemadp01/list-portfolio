// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// navmenu active
const navBar = document.querySelectorAll('#nav-menu ul li');

navMenu.addEventListener('click', (e) => {
  navBar.forEach((item) => {
    item.classList.remove('active');
  });

  e.target.parentElement.classList.add('active');
});

// Techstack
const feButton = document.getElementById('fe-button');
const beButton = document.getElementById('be-button');
const tsfe = document.querySelector('#tech-stack .ts-fe');
const tsbe = document.querySelector('#tech-stack .ts-be');

function toggleActive(buttonId) {
  let buttons = document.querySelectorAll('.ts-button button');

  buttons.forEach((button) => {
    if (button.id === buttonId) {
      button.classList.add('ts-button-active');
    } else {
      button.classList.remove('ts-button-active');
    }
  });
}

// Menambahkan event listener pada tombol Front-end
feButton.addEventListener('click', function () {
  toggleActive('fe-button');
  if (feButton.classList.contains('ts-button-active')) {
    tsfe.classList.remove('hidden');
    tsbe.classList.add('hidden');
  } else {
    tsfe.classList.remove('hidden');
  }
});

// Menambahkan event listener pada tombol Back-end
beButton.addEventListener('click', function () {
  toggleActive('be-button');
  if (beButton.classList.contains('ts-button-active')) {
    tsbe.classList.remove('hidden');
    tsfe.classList.add('hidden');
  } else {
    tsbe.classList.add('hidden');
  }
});
