let books = null;
function sortBooks() {
  books.sort((bookA, bookB) => {
    if (bookA.id < bookB.id) {
      return 1;
    }
    if (bookA.id > bookB.id) {
      return -1;
    }
    return 0;
  });
}
function displayBooks() {
  sortBooks();
  const section = document.getElementById('collection');
  const list = document.createElement('ul');
  list.id = 'list';
  books.forEach((book) => {
    const { title } = book;
    const { id } = book;
    const liId = `li${title}`;
    const bookCard = `<li id=${liId} class= "booklist" >
      <div class="text">
      <p>"${book.title}" by</p>
      <p>${book.author}</p>
      </div>
      <button id=${id} onclick="removebook(${id})" class="remove">Remove</button>
      </li>
      <hr>`;
    list.insertAdjacentHTML('beforeend', bookCard);
  });
  section.innerHTML = '';
  section.appendChild(list);
}
function updateLocalStorage(remove) {
  if (!remove) {
    if (books === null) {
      books = JSON.parse(window.localStorage.getItem('books'));
    }
  }
  window.localStorage.setItem('books', JSON.stringify(books));
  if (books === null) {
    books = [];
  }
  displayBooks();
}
function removebook(id) { // eslint-disable-line no-unused-vars
  const temp = [];
  let update = false;
  books.forEach((book) => {
    if (book.id !== id) {
      if (!update) {
        temp.push({
          id: (book.id - 1),
          title: book.title,
          author: book.author,
        });
      } else {
        temp.push(book);
      }
    } else {
      update = true;
    }
  });
  books = temp;
  updateLocalStorage(true);
}
function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  let status = false;
  books.forEach(book => {
    if(book.title == title && book.author == author) {
      const error =document.getElementById('error');
      error.innerHTML =`Alert: Book already exists in your list`;
      status = true;
    }
  });
  if (!status){
  let id = books.length;
  const book = { id, title, author };
  books.push(book);
  updateLocalStorage(false);
}
}

document.addEventListener('DOMContentLoaded', () => {
  updateLocalStorage(false);
  const addbutton = document.getElementById('btnAdd');
  addbutton.addEventListener('click', (event) => {
    event.preventDefault();
    addBook();
  });
});
