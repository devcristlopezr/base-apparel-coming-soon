const form = document.querySelector('.form');

const submitBtn = document.querySelector('.submit');
const email = document.getElementById('email');

const small = document.querySelector('.small');
const icon = small.nextElementSibling;
form.addEventListener('submit', (e) => {
  if (!isValidEmail()) {
    e.preventDefault();
  }
});

email.addEventListener('input', () => {
  isValidEmail();
});

isValidEmail = () => {
  if (!validateEmail(email.value.trim())) {
    showError(email, small, icon);
    return false;
  } else {
    removeError(email, small, icon);
    return true;
  }
};

validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

showError = (input, small, icon) => {
  input.classList.add('error');
  small.innerText = 'Please provide a valid email';
  icon.classList.add('icon-error');
};

removeError = (input, small, icon) => {
  input.classList.remove('error');
  small.innerText = '';
  icon.classList.remove('icon-error');
};
