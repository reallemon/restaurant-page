export default function fillContactPage() {
  const content = document.getElementById('content');

  const contactContainer = document.createElement('div');
  contactContainer.id = 'contact-content';
  contactContainer.classList.add('grid-container');

  const contactForm = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'name';
  nameLabel.textContent = 'Name:';

  const nameField = document.createElement('input');
  nameField.type = 'text';
  nameField.id = 'name';
  nameField.name = 'name';
  nameField.required = true;

  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'email';
  emailLabel.textContent = 'Email:';

  const emailField = document.createElement('input');
  emailField.type = 'email';
  emailField.id = 'email';
  emailField.name = 'email';
  emailField.required = true;

  const messageLabel = document.createElement('label');
  messageLabel.htmlFor = 'message';
  messageLabel.textContent = 'Message:';

  const messageField = document.createElement('textarea');
  messageField.id = 'message';
  messageField.name = 'message';
  messageField.rows = 5;
  messageField.required = true;

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Send';
  submitButton.type = 'submit';

  contactForm.appendChild(nameLabel);
  contactForm.appendChild(nameField);
  contactForm.appendChild(emailLabel);
  contactForm.appendChild(emailField);
  contactForm.appendChild(messageLabel);
  contactForm.appendChild(messageField);
  contactForm.appendChild(submitButton);

  contactContainer.appendChild(contactForm);
  content.appendChild(contactContainer);
}
