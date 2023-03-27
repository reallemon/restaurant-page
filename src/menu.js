const newCard = ({ name, description, image }) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.src = image;
  cardImage.classList.add('card-image');

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = name;
  cardTitle.classList.add('card-title');

  const cardContent = document.createElement('p');
  cardContent.textContent = description;
  cardContent.classList.add('card-content');

  card.appendChild(cardTitle);
  card.appendChild(cardImage);
  card.appendChild(cardContent);

  return card;
};

export default function fillMenu() {
  const content = document.getElementById('content');

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('content');

  const burrito = newCard({
    name: 'Burrito',
    description:
      'This item is renowned for its delectable taste that makes people so desperate that our employees must undergo mandatory self-defense classes',
    image: 'https://www.tacobell.com/images/22371_quesarito_750x660.jpg',
  });

  const burrito2 = newCard({
    name: 'Burrito 2',
    description:
      'This item is renowned for its delectable taste that makes people so desperate that our employees must undergo mandatory self-defense classes',
    image: 'https://www.tacobell.com/images/22371_quesarito_750x660.jpg',
  });

  const burrito3 = newCard({
    name: 'Burrito 3',
    description:
      'This item is renowned for its delectable taste that makes people so desperate that our employees must undergo mandatory self-defense classes',
    image: 'https://www.tacobell.com/images/22371_quesarito_750x660.jpg',
  });

  menuContainer.appendChild(burrito);
  menuContainer.appendChild(burrito2);
  menuContainer.appendChild(burrito3);

  content.appendChild(menuContainer);
}
