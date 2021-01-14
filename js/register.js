const username = document.querySelector('#username-register');
const email = document.querySelector('#email-register');
const password = document.querySelector('#password-register');
const repassword = document.querySelector('#re-password-register');
const fullname = document.querySelector('#fullname-register');
const phone = document.querySelector('#phone-register');
const address = document.querySelector('#address-register');
// const username = document.querySelector('#username-register');

const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const rePasswordError = document.querySelector('#re-password-error');
const fullNameError = document.querySelector('#fullname-error');
const phoneError = document.querySelector('#phone-error');
const addressError = document.querySelector('#address-error');
// const usernameError = document.querySelector('#username-error');

const submitButton = document.querySelector('#submit-button');

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

submitButton.addEventListener('click', (e) => {
  // e.preventDefault();
  
  if (username.value === '') {
    usernameError.textContent = 'Username must not be blank'
    return
  } else {
    usernameError.textContent = '';
  }

  if (email.value === '') {
    emailError.textContent = 'Email must not be blank'
    return
  } else if (!emailRegex.test(String(email.value).toLocaleLowerCase())) {
    emailError.textContent = 'Invalid email';
    return
  } else {
    emailError.textContent = ''
  }


  console.log(passRegex.test(password.value));
  if (password.value === '') {
    passwordError.textContent = 'Password must not be blank'
    return
  } else if (!passRegex.test(password.value)) {
    passwordError.textContent =
      'Password must be longer than 8 characters, contain at least 1 number, 1 uppercase and no special character';
    return;
  } else {
    passwordError.textContent = '';
  }

  

  if (repassword.value === '') {
    rePasswordError.textContent = 'Password must not be blank';
    return;
  } else if (repassword.value !== password.value) {
    rePasswordError.textContent = 'Password does not match';
  } else {
    rePasswordError.textContent = ''
  }

  if (fullname.value === '') {
    fullNameError.textContent = 'Name must not be blank'
    return
  } else {
    fullNameError.textContent = ''
  }
})