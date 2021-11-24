let myLibrary = []

const bookCardsList = document.querySelector (".bookCardContainer");

const book1 = new Book("Animal Farm", "George Orwell", 215, "Yes");
const book2 = new Book("Harry Potter and the Prisoner of Azkaban", "J. K. Rowling", 215, "No");

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info =  function () {
        return ['"'+ title +'"', author, pages +" pages", isRead];
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(book1);
addBookToLibrary(book2);

const showMyLibrary = myLibrary.map(book => {
    let newCard = document.createElement("div");
    newCard.className = "bookCard";
    bookCardsList.append(newCard);
    addCardElement(newCard, book.info());
})

function addCardElement(newCard, info) {
    info.map(element => {
        let e = document.createElement('p');
        e.innerHTML = element;
        newCard.append(e)
    })
}
