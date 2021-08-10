import {books} from './books.js';
function removebook(id){
  newBooks.removebook(id);
}
let newBooks = new books();
document.addEventListener('DOMContentLoaded', () => {
  newBooks.updateLocalStorage(false);
  const addbutton = document.getElementById('btnAdd');
  addbutton.addEventListener('click', (event) => {
    event.preventDefault();
    newBooks.addBook();
  });
});
