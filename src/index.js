import './style.scss';
import createNavbar from './navbar';
import fillHomePage from './homePage';
import fillContactPage from './contactPage';
import fillMenu from './menu';

createNavbar();

const nav = {
  menu: document.querySelector('.menu-nav'),
  home: document.querySelector('.home-nav'),
  contact: document.querySelector('.contact-nav'),
};

const resetPage = () => {
  Object.values(nav).forEach((item) => item.classList.remove('active-tab'));
  const dynamicContent = document.querySelector('.menu + div');
  if (dynamicContent) dynamicContent.remove();
};

const activate = (navItem) => {
  resetPage();
  navItem.classList.add('active-tab');
};

const activateHome = () => {
  activate(nav.home);
  fillHomePage();
};

const activateContact = () => {
  activate(nav.contact);
  fillContactPage();
};

const activateMenu = () => {
  activate(nav.menu);
  fillMenu();
};

nav.home.addEventListener('click', activateHome);
nav.contact.addEventListener('click', activateContact);
nav.menu.addEventListener('click', activateMenu);

activateHome();
