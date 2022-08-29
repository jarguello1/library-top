let myLibrary = [];

function Book(title, author, pages, readStatus) {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        isRead = false
    ) 
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


const animalFarm = new Book('Animal Farm', 'George Orwell', 112, 'not read');
const eotw = new Book('Eye of the World', 'Robert Jordan', 782, 'not read');
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, 'not read');

addBookToLibrary(animalFarm);
addBookToLibrary(eotw);
addBookToLibrary(theHobbit)


console.log(myLibrary);

const container = document.querySelector('#container');

const bookCard = document.createElement('div');
bookCard.classList.add('bookCard');

for (books in myLibrary) {

}