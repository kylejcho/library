let myLibrary = []

const aBook = document.querySelector(".book");

const book1 = new Book("Animal Farm", "George Orwell", 215, true);

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        return "Title: " + this.title + ", Author: " + this.author + ", Pages: " + this.pages + ", read: " + this.isRead;
    } 
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(book1);



const showMyLibrary = myLibrary.map(bookProp => bookProp.info());

console.log(showMyLibrary)

aBook.append(showMyLibrary);