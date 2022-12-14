// Array for books
let myLibrary = [];

//Book Object
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Example Books
const animalFarm = new Book('Animal Farm', 'George Orwell', 112, true);
const eotw = new Book('Eye of the World', 'Robert Jordan', 782, true);
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, false);

// Add Example books to list
myLibrary.push(animalFarm);
myLibrary.push(eotw);
myLibrary.push(theHobbit);

// Function to create html div for each book
function createBookCard(book) {
    const container = document.querySelector('#container');
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
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

    pages.textContent = `${book.pages} pg`;
    pages.classList.add('Pages');
    infoContainer.appendChild(pages);

    if (book.readStatus) {
        readStatus.textContent = 'Read';
        readStatus.style.backgroundColor = '#63da63';
    } else {
        readStatus.textContent = 'Not Read';
        readStatus.style.backgroundColor = '#e04f63';
    }

    readStatus.addEventListener('click', () => {
        book.readStatus = !book.readStatus;
        if (book.readStatus) {
            readStatus.textContent = 'Read';
            readStatus.style.backgroundColor = '#63da63';
            storeData();
        } else {
            readStatus.textContent = 'Not Read';
            readStatus.style.backgroundColor = '#e04f63';
            storeData();
        }
    });
    buttonContainer.appendChild(readStatus);

    removeBook.textContent = 'Remove Book';
    removeBook.classList.add('removeBtn');
    removeBook.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        updateDisplay();
        storeData();
    });
    buttonContainer.appendChild(removeBook);

    bookCard.appendChild(infoContainer);
    bookCard.appendChild(buttonContainer);

    container.appendChild(bookCard);
}

// Updates the display to include all books everytime one is added or removed
function updateDisplay() {
    const container = document.querySelector('#container');
    const books = document.querySelectorAll('.bookCard');
    books.forEach((book) => container.removeChild(book));
    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
    }
}

//Function to close add book pop up form
function closeWindow() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    const bookForm = document.getElementById('bookInput');
    bookForm.style.display = 'none';
}
// Open book pop up form
function openWindow() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    const bookForm = document.getElementById('bookInput');
    bookForm.style.display = 'block';
}

// Add functions to buttons
const addBook = document.getElementById('addBook');
addBook.addEventListener('click', openWindow);

const closeForm = document.getElementById('close');
closeForm.addEventListener('click', closeWindow);

// Uses HTML form to get information for the new book object, adds it to list and updates the page.
function submitForm(that) {
    event.preventDefault();
    let newBook = new Book(
        that.bookTitle.value,
        that.bookAuthor.value,
        that.bookPages.value,
        that.isRead.checked
    );
    myLibrary.push(newBook);
    bookInput.reset();
    storeData();
    updateDisplay();
    closeWindow();
    return false;
}

//store data in local storage
function storeData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

//restores data for initial page load
function restoreData() {
    if (!localStorage.myLibrary) {
        updateDisplay();
    } else {
        let objects = localStorage.getItem('myLibrary');
        objects = JSON.parse(objects);
        myLibrary = objects;
        updateDisplay();
    }
}

// Intialize Page
restoreData();
