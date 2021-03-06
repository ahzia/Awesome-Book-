export default class Books {
  constructor() {
    this.books = null;
  }

  eventListeners() {
    const removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach((btn) => {
      btn.onclick = (event) => {
        const { target } = event;
        const { id } = target;
        const bookId = (id).replace('btn', '');
        this.removebook(bookId);
      };
    });
  }

  sortBooks() {
    this.books.sort((bookA, bookB) => {
      if (bookA.id < bookB.id) {
        return 1;
      }
      if (bookA.id > bookB.id) {
        return -1;
      }
      return 0;
    });
  }

  resetInputs = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('error').innerHTML = '';
  }

  displayBooks() {
    this.sortBooks();
    const section = document.getElementById('collection');
    const list = document.createElement('ul');
    list.id = 'list';
    let odd = false;
    this.books.forEach((book) => {
      let oddOrEven = 'li-odd';
      if (odd === false) {
        oddOrEven = 'li-even';
        odd = true;
      } else {
        odd = false;
      }
      const { title } = book;
      const { id } = book;
      const liId = `li${title}`;
      const bookCard = `<li id=${liId} class= "booklist ${oddOrEven}" >
        <div class="text">
        <p>"${book.title}" by</p>
        <p>: ${book.author}</p>
        </div>
        <button id="btn${id}" class="remove button">Remove</button>
        </li>
        <hr>`;
      list.insertAdjacentHTML('beforeend', bookCard);
    });
    section.innerHTML = '';
    section.appendChild(list);
    this.resetInputs();
  }

  updateLocalStorage(remove) {
    if (!remove) {
      if (this.books === null) {
        this.books = JSON.parse(window.localStorage.getItem('books'));
      }
    }
    window.localStorage.setItem('books', JSON.stringify(this.books));
    if (this.books === null) {
      this.books = [];
    }
    this.displayBooks();
    this.eventListeners();
  }

  removebook(id) { // eslint-disable-line no-unused-vars
    const temp = [];
    let update = false;
    this.books.forEach((book) => {
      if (book.id != id) { // eslint-disable-line eqeqeq
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
    this.books = temp;
    this.updateLocalStorage(true);
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const error = document.getElementById('error');
    let status = false;
    if (title === '') {
      error.innerHTML = 'title is Required';
    } else {
      this.books.forEach((book) => {
        if (book.title === title && book.author === author) {
          error.innerHTML = 'Alert: Book already exists in your list';
          status = true;
        }
      });
      if (!status) {
        const id = this.books.length;
        const book = { id, title, author };
        this.books.push(book);
        this.updateLocalStorage(false);
      }
    }
  }
}