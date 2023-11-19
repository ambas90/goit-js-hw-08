import throttle from 'lodash.throttle';
const email = document.querySelector('input[name = email]');
const message = document.querySelector('textarea[name = message]');
const form = document.querySelector('.feedback-form');
const feedbackFormState = { email, message };

//zapisywanie teksu pół formularza
function formSaver(event) {
  feedbackFormState.email = email.value;
  feedbackFormState.message = message.value;
  feedbackFormState[event.target.name] = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

//nasłuchiwanie wpisywania tekstu
form.addEventListener('input', throttle(formSaver, 500));

//czyszczenie storage i pól formularza
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(feedbackFormState);
  localStorage.removeItem('feedback-form-state');
  feedbackFormState.email = null;
  feedbackFormState.message = null;
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
