let myLibrary = []

const bookCardsList = document.querySelector('.bookCardContainer');
const newBookButton = document.querySelector('#newBookButton')
const addButton = document.querySelector('#addButton')
const inputTitle = document.querySelector('#inputTitle');
const book1 = new Book("Animal Farm", "George Orwell", 215, "Yes");
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
}

addBookToLibrary(book1);
//addBookToLibrary(book2);

const showMyLibrary = myLibrary.map(book => {
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
    
}