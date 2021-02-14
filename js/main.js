let myLibrary = [];

class Book{
  // the constructor...
  constructor(isbn, title, author, read,pages){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  // do stuff here
}

document.querySelector("#book_form").addEventListener("submit",(e) =>{
    e.preventDefault();

    const isbn = document.querySelector("#isbn").value;
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;


});