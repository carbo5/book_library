let myLibrary = [];

class Book{
  // the constructor...
  constructor(isbn, title, author, read, pages){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(e) {
  // do stuff here
  e.preventDefault();

  const isbn = document.querySelector("#isbn").value;
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  console.log(read);

  const book = new Book(isbn, title, author, read, pages);


  myLibrary.push(book);

  addBookToTable(book);

  console.log(myLibrary);


}

function addBookToTable(book){

  const table_Tbody = document.querySelector('#tableBookBody');

  const row = document.createElement('tr');

  //console.log(`${book.isbn}`);

  let isRead = `<input type="checkbox"></input>`;

  //console.log(book.read);

  if(book.read){
    isRead = `<input type="checkbox" checked></input>`;
  }


  row.innerHTML = `
    <td>${book.isbn}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${isRead}</td>
    <td>${book.pages}</td>
    <td><a href='#' class="delete">Delete</td>
  `;

 

  table_Tbody.appendChild(row);

  /*console.log(row);
  console.log(table_Tbody);*/


}

document.querySelector("#form_book").addEventListener("submit", addBookToLibrary);

document.querySelector('#tableBookBody').addEventListener('click', (e) =>{
  console.log(e.target);
  deleteBook(e.target);
});

function deleteBook(element){
  if(element.classList.contains('delete')){
    element.parentElement.parentElement.remove();
  }
  
}