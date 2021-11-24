let myLibrary = []

const bookCardsList = document.querySelector('.bookCardContainer');
const newBookButton = document.querySelector('#newBookButton')
const addButton = document.querySelector('#addButton')
const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const inputCheckbox = document.querySelector('#inputcheckbox');

//const book1 = new Book("Animal Farm", "George Orwell", 215, "Yes");
//const book2 = new Book("Harry Potter", "J. K. Rowling", 215, "No");

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = ['"'+ title +'"', author, pages +" pages", "Read: " + isRead];
    
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(newBook)
    console.log(myLibrary)
    showMyLibrary();
}

//addBookToLibrary(book1);
//addBookToLibrary(book2);

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
    let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, "yes");
    addBookToLibrary(newBook);
}

