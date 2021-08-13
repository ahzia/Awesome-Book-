import Books from './books.js';

function assignDate() {
  const DateTime = luxon.DateTime.now(); // eslint-disable-line no-undef
  const Date = `${DateTime.year} - ${DateTime.month} - ${DateTime.day}`;
  document.getElementById('date').innerHTML = Date;
}

const newBooks = new Books();

document.addEventListener('DOMContentLoaded', () => {
  newBooks.updateLocalStorage(false);
  const addbutton = document.getElementById('btnAdd');
  addbutton.addEventListener('click', (event) => {
    event.preventDefault();
    newBooks.addBook();
  });
});

const clear = () => {
  const menuElements = document.querySelectorAll('[data-tab]');
  var i;
  for (i = 0; i < menuElements.length; i+=1) {
    menuElements[i].classList.remove('active-tab');
    var id = menuElements[i].getAttribute('data-tab');
    document.getElementById(id).classList.remove('active-tab');
  }
}

const change = (e) => {
  clear();
  e.target.classList.add('active-tab');
  const id = e.currentTarget.getAttribute('data-tab');
  document.getElementById(id).classList.add('active-tab');
}

const bindAll= () => {
  const menuElements = document.querySelectorAll('[data-tab]');
  var i;
  for (i = 0; i < menuElements.length; i+=1) {
    menuElements[i].addEventListener('click', change, false);
  }
}

bindAll();
assignDate();