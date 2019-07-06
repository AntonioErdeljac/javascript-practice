const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

onSubmit = (event) => {
  event.preventDefault();

  if (!name.value || !email.value) {
    message.classList.add('error');
    message.innerHTML = 'All fields are required';

    setTimeout(() => {
      message.innerHTML = '';
      message.classList.remove('error');
    }, 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value}: ${email.value}`));

    userList.appendChild(li);

    form.reset();
  }
}

form.addEventListener('submit', onSubmit);