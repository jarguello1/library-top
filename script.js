let myLibrary = [];

function Book(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


const animalFarm = new Book('Animal Farm', 'George Orwell', 112, false);
const eotw = new Book('Eye of the World', 'Robert Jordan', 782, false);
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, false);

addBookToLibrary(animalFarm);
addBookToLibrary(eotw);
addBookToLibrary(theHobbit);

console.log(myLibrary);

function createBookCard(book) {
    const container = document.querySelector('#container');
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p')
    const pages = document.createElement('p');
    const readStatus = document.createElement('button');
    const removeBook = document.createElement('button');
    const infoContainer = document.createElement('div');
    const buttonContainer = document.createElement('div');

    bookCard.classList.add('bookCard');
    infoContainer.classList.add('bookInfo');
    buttonContainer.classList.add('btnContainer');
    readStatus.classList.add('btn');
    removeBook.classList.add('btn');

    title.textContent = book.title;
    title.classList.add('Title');
    infoContainer.appendChild(title);

    author.textContent = book.author;
    author.classList.add('Author');
    infoContainer.appendChild(author);

    pages.textContent = book.pages;
    pages.classList.add('Pages');
    infoContainer.appendChild(pages);

    
    if (book.isRead) {
        readStatus.textContent = 'Read'
        readStatus.style.backgroundColor = '#63da63'
      } else {
        readStatus.textContent = 'Not Read'
        readStatus.style.backgroundColor = '#e04f63';
      }
    readStatus.addEventListener('click', () => {
        book.isRead = !book.isRead;
        if (book.isRead) {
            readStatus.textContent = 'Read'
            readStatus.style.backgroundColor = '#63da63'
          } else {
            readStatus.textContent = 'Not Read'
            readStatus.style.backgroundColor = '#e04f63';
          }
    })
    buttonContainer.appendChild(readStatus);

    removeBook.textContent = "Remove Book";
    removeBook.classList.add('removeBtn')
    removeBook.addEventListener('click', deleteBook)
    buttonContainer.appendChild(removeBook);

    bookCard.appendChild(infoContainer);
    bookCard.appendChild(buttonContainer);

    container.appendChild(bookCard);
}

myLibrary.forEach(book => createBookCard(book));


function closeWindow (e) {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    const bookForm = document.getElementById('bookInput');
    bookForm.style.display = 'none';
}

function openWindow () {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    const bookForm = document.getElementById('bookInput');
    bookForm.style.display = 'block';
}

const addBook = document.getElementById('addBook');
addBook.addEventListener('click', openWindow);

const closeForm = document.getElementById('close');
closeForm.addEventListener('click', closeWindow)

function deleteBook(e) {

}

