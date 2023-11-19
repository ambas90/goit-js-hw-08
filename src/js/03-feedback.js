import throttle from 'lodash.throttle';
const email = document.querySelector('input[name = email]');
const message = document.querySelector('textarea[name = message]');
const form = document.querySelector('.feedback-form');
const feedbackFormState = { email, message };

//nasłuchiwanie wpisywania tekstu
form.addEventListener('input', event => {
  feedbackFormState[event.target.name] = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

//czyszczenie storage i pól formularza
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(feedbackFormState);
  localStorage.removeItem('feedback-form-state');
  email.value = null;
  message.value = null;
});

// uzupełnianie formularza podczas przeładowania strony
window.addEventListener('DOMContentLoaded', () => {
  try {
    email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    message.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
});
