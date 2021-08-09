let books=[{
    id:0,
    title:"new Book JS",
    author:"new author"
},{
    id:1,
    title:"new Book",
    author:"new author"
}];
function displayBook(){
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
  displayBook();  

  // const date = new Date();
  // const id = date.getMilliseconds();
  // console.log(id);

}



document.addEventListener('DOMContentLoaded', () => {
    displayBook();
    const addbutton = document.getElementById('btnAdd');
    addbutton.addEventListener('click', (event) => {
      event.preventDefault();
      addBook();
    });
});
