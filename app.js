let myLibrary = []

const bookCardsList = document.querySelector('.bookCardContainer');
const newBookButton = document.querySelector('#newBookButton')
const addButton = document.querySelector('#addButton')
const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputYear = document.querySelector('#inputYear');
const inputPages = document.querySelector('#inputPages');
const inputCheckbox = document.querySelector('#inputcheckbox');
const newForm = document.querySelector('#newForm');

function Book(title, author, year, pages, isRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.isRead = isRead;
    this.info = [title, author,  year , pages + " pg.", "Read: " + isRead];
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(newBook)
    console.log(myLibrary)
    showMyLibrary();
}

const showMyLibrary = () => myLibrary.map(book => {
    let newCard = document.createElement("div");
    newCard.className = "bookCard";
    bookCardsList.append(newCard);
    addCardElement(newCard, book.info);
})

function addCardElement(newCard, info) {
    info.map(element => {
        let e = document.createElement('p');
        e.innerHTML = element;
        newCard.append(e)
    })
}


addButton.onclick = () => {
    myLibrary.pop();
    let newBook = new Book(inputTitle.value, inputAuthor.value, inputYear.value, inputPages.value, "yes");
    addBookToLibrary(newBook);
}

newBookButton.onclick = () => {
    newForm.style.visibility = "visible";
}

