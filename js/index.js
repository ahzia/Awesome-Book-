let books=[{
    id:1,
    title:"new Book JS 1",
    author:"new author"
},{
  id:2,
  title:"new Book JS 2",
  author:"new author"
},
{
  id:0,
    title:"new Book 0",
    author:"new author"
},
{
  id:3,
  title:"new Book JS 3",
  author:"new author"
},
];
function sortBooks(){
  books.sort((bookA, bookB) => {

    if (bookA.id < bookB.id) {
      return 1;
    }
    if (bookA.id> bookB.id) {
      return -1;
    }
    return 0;
  });
}
function displayBooks(){
        sortBooks();
        const section = document.getElementById('collection');
        const list = document.createElement('ul');
        list.id = 'list';
        books.forEach((book) => {
          const { title } = book; //const title=book.title
          const { id } = book;
          const liId = `li${title}`; ///newbook => liId=linewBook
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

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = books.length;
  const book = {id, title, author};
  books.push(book);
  displayBooks();
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
    const addbutton = document.getElementById('btnAdd');
    addbutton.addEventListener('click', (event) => {
      event.preventDefault();
      addBook();
    });
});
