export default function fillHomePage() {
  const content = document.getElementById('content');
  const heading = document.createElement('h1');
  heading.textContent = 'Taco Bell';

  const image = document.createElement('img');
  image.src =
    'https://locations.tacobell.com/permanent-b0b701/assets/images/TBUS_Logo.7bd20747.svg';

  image.classList.add('icon');

  const shilling = document.createElement('p');
  shilling.textContent =
    'Taco Bell is known for its affordable and convenient fast-food options, ' +
    'which are available in many locations around the world. Secondly, the ' +
    'restaurant has a wide variety of menu items, from classic tacos and ' +
    'burritos to more unique offerings like the Crunchwrap Supreme and ' +
    'Doritos Locos Tacos. Additionally, Taco Bell is known for being ' +
    'creative with its limited-time menu items, often collaborating with ' +
    'other brands to offer unique flavor combinations. Finally, for fans ' +
    'of Tex-Mex cuisine, Taco Bell may be a go-to spot for satisfying ' +
    'their cravings.';

  content.appendChild(image);
  content.appendChild(heading);
  content.appendChild(shilling);
}
