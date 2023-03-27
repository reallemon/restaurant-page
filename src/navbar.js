export default function createNavbar() {
  const content = document.getElementById('content');
  content.classList.add('grid-container');

  const heading = document.createElement('h1');
  heading.textContent = 'Taco Bell';
  heading.classList.add('title');

  const image = document.createElement('img');
  image.src =
    'https://locations.tacobell.com/permanent-b0b701/assets/images/TBUS_Logo.7bd20747.svg';

  image.classList.add('icon');

  const navMenu = document.createElement('ul');
  navMenu.classList.add('menu');

  const homeNav = document.createElement('li');
  const contactNav = document.createElement('li');
  const menuNav = document.createElement('li');

  homeNav.classList.add('home-nav');
  contactNav.classList.add('contact-nav');
  menuNav.classList.add('menu-nav');

  homeNav.textContent = 'Home';
  contactNav.textContent = 'Contact';
  menuNav.textContent = 'Menu';

  navMenu.appendChild(homeNav);
  navMenu.appendChild(contactNav);
  navMenu.appendChild(menuNav);

  content.append(image);
  content.appendChild(heading);
  content.appendChild(navMenu);
}
