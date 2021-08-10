import {books} from './books.js';

let newBooks = new books();
document.addEventListener('DOMContentLoaded', () => {
  newBooks.updateLocalStorage(false);
  const addbutton = document.getElementById('btnAdd');
  addbutton.addEventListener('click', (event) => {
    event.preventDefault();
    newBooks.addBook();
  });
});

function removebook(id) {
  newBooks.removebook(id);
}

const user = removebooks('');
user = 0;
