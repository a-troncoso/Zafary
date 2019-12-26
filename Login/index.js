
const inpUsername = document.querySelector('#inp-username');
const btnLogin = document.querySelector('#btn-login');
const msgError = document.querySelector('.msg-error');
const inpPassword = document.querySelector('#inpu-password');

btnLogin.addEventListener('click', login);
inpUsername.addEventListener('focus', focusInput);
inpPassword.addEventListener('focus', focusInput);

function login() {

  if (!inpUsername || !inpPassword) return;

  if (inpUsername.value !== 'ejemplo@gmail.com' || inpPassword.value !== '123456') {
    msgError.classList.remove(['hide']);
    msgError.classList.add(['visible']);
  } else {
    document.location.assign('../Layout/index.html');
  }
}

function focusInput() {
  msgError.classList.remove(['visible']);
  msgError.classList.add(['hide']);
}