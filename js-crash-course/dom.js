const form = document.getElementById('my-form');
const form2 = document.querySelector('#my-form');

const itemsQuery = document.querySelectorAll('.item');
const itemsElements = document.getElementsByTagName('li');


const ul = document.querySelector('ul.items');

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';

const button = document.querySelector('input.btn');
button.style.background = 'red';

const handleClick = (event) => {
  event.preventDefault();

  form.style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>';
}

button.addEventListener('click', handleClick);
