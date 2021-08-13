import Books from './books.js';

function assignDate() {
  const DateTime = luxon.DateTime.now();
  let Date = DateTime.year + "-" + DateTime.month + "-"+DateTime.day;
  document.getElementById("date").innerHTML = Date;
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

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active-tab');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active-tab');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active-tab');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active-tab');
  }

  bindAll();
}

var connectTabs = new Tabs();
assignDate();