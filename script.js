let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

const htmlGrid = document.getElementById("booklibrary")

function removeBook(bookId) {
    myLibrary = myLibrary.filter(book => book.id !== bookId);
    updateUI();
}

function updateUI() {
    htmlGrid.innerHTML = '';

    for (const book of myLibrary) {

        let bookCard = document.createElement('div')
        bookCard.className = 'book-card';

        let titleText = document.createElement('p');
        let authorText = document.createElement('p');
        let pageCount = document.createElement('p');
        let isRead = document.createElement('p');
        let toggleReadButton = document.createElement('button');
        let removeButton = document.createElement('button');

        titleText.textContent = `Title: ${book.title}`;
        authorText.textContent = `Author: ${book.author}`;
        pageCount.textContent = `Pages: ${book.pages}`;
        isRead.textContent = `Read: ${book.read ? "Yes" : "No"}`;
        toggleReadButton.textContent = book.read ? 'Mark as Not Read' : 'Mark as Read';
        removeButton.textContent = 'Remove Book';

        toggleReadButton.addEventListener('click', () => {
            book.toggleRead();
            updateUI();
        });

        removeButton.addEventListener('click', function () {
            removeBook(book.id);
        });

        htmlGrid.appendChild(bookCard);
        bookCard.appendChild(titleText);
        bookCard.appendChild(authorText);
        bookCard.appendChild(pageCount);
        bookCard.appendChild(isRead);
        bookCard.appendChild(toggleReadButton);
        bookCard.append(removeButton);
        bookCard.setAttribute('book-id', book.id);
    }
}

let nextBookId = 1;

const addBookToLibrary = (book) => {
    book.id = nextBookId++;
    myLibrary.push(book);
}

addBookToLibrary(new Book("The World for Sale: Money, Power, and the Traders Who Barter the Earth's Resources", "Javier Blas", 320, true))
addBookToLibrary(new Book("Elon Musk", "Walter Isaacson", 688, true))
addBookToLibrary(new Book("The Brothers Karamazov", "Fyodor Dostoevsky", 796, false))

updateUI();

const addBtn = document.getElementById('openForm');
const myForm = document.getElementById('myForm');
const popUpForm = document.getElementById('formPopup');
const closeBtn = document.getElementById('closeForm');


addBtn.addEventListener('click', function () {
    popUpForm.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    popUpForm.style.display = 'none';
})

myForm.addEventListener('submit', function (event) {

    event.preventDefault(); // Prevent the default form submission

    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pageCount = document.getElementById('pagecount').value;
    var isRead = document.getElementById('isRead').checked;

    addBookToLibrary(new Book(title, author, pageCount, isRead));
    popUpForm.style.display = 'none';
    updateUI();
    myForm.reset();
})


