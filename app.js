let myLibrary = [];

const bookCardsList = document.querySelector('#bookCardContainer');
const newBookButton = document.querySelector('#newBookButton')
const addButton = document.querySelector('#addButton')
const title = document.querySelector('#inputTitle');
const author = document.querySelector('#inputAuthor');
const year = document.querySelector('#inputYear');
const pages = document.querySelector('#inputPages');
const checkBox = document.querySelector('#inputCheckBox');
const formContainer = document.querySelector('#formContainer');

class Book {
    constructor(title, author, year, pages, isRead) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.isRead = isRead;
        this.info = [title, "By: " + author, "Published: " + year , "Number of pages: " + pages, isRead];
    }
}

const addBookToLibrary = (newBook) => {
    bookCardsList.innerHTML = '';
    myLibrary.push(newBook);
    showMyLibrary();
}

const showMyLibrary = () => myLibrary.map(book => {
    let newCard = createNewCard();
    addCardElements(newCard, book.info);
    createReadToggle(book, newCard)
})

createNewCard = () => {
    let card = document.createElement("div");
    card.className = "bookCard";
    bookCardsList.append(card);
    return card;
}

const addCardElements = (newCard, info) => {
    createDeleteButton(newCard);
    displayBookProperties(info, newCard);
}

const createDeleteButton = (newCard) => {
    let deleteButton = document.createElement('button');
    deleteButton.classList = "delete";
    deleteButton.innerHTML = "×";
    newCard.append(deleteButton);
}

const displayBookProperties = (info, newCard) => {
    info.map(element => {
        let e = document.createElement('p');
        e.innerHTML = element;
        newCard.append(e)
    })
}

const createReadToggle = (book, newCard) => {
    let readToggle = document.createElement('button');
    readToggle.classList = "readToggle";
    if (book.isRead == "no") {
        toggleUnread(readToggle)
    } else {
        toggleRead(readToggle)
    }
    newCard.lastChild.remove();
    newCard.append(readToggle);
}

addButton.addEventListener('click', function() {
    if (title.value && author.value && year.value && pages.value) {
        let checked = readCheckBox();
        let newBook = new Book(title.value, author.value, year.value, pages.value, checked);
        addBookToLibrary(newBook);
        formContainer.style.visibility = "hidden";
    } else return;
})

const readCheckBox = () => {
    let checked;
    if (checkBox.checked) checked = "yes";
    else checked = "no";
    return checked;
}

newBookButton.addEventListener('click', function() {
    formContainer.style.visibility = "visible";
    title.value = null;
    author.value = null;
    year.value = null;
    pages.value = null;
    checkBox.checked = false;
})

const deleteButton = document.querySelectorAll('.delete');
document.addEventListener('click', function(e) {
    if (e.target.innerHTML == '×') {
        deleteClick(e);
    }
    else if (e.target.className == "readToggle") {
        readToggleClick(e);
    }
})

const deleteClick = (e) => {
    let div = e.target.parentNode;
    let a = div.children[1].innerHTML;
    myLibrary = myLibrary.filter(book => {
        if (book.title !== a) {
            return true;
        }
    })
    div.remove();
}

const readToggleClick = (e) => {
    let a = e.target.parentNode.children[1].innerHTML;
    myLibrary.forEach(book => {
        if (book.title == a) {
            if (book.isRead == "yes") {
                book.isRead = "no";
                toggleUnread(e.target);
            } else {
                book.isRead = "yes";
                toggleRead(e.target)
            }
        } 
    })
}

const toggleUnread = (e) => {
    e.style.border = "2px solid #d45555";
    e.style.color = "#d45555"
    e.innerHTML = "Not read"
}
const toggleRead = (e) => {
    e.style.border = "2px solid #56b689";
    e.style.color = "#56b689"
    e.innerHTML = "Read"
}

//Example Books
let example1 = new Book("Animal Farm", "George Orwell", "1945", "345", "yes");
let example2 = new Book("1984", "George Orwell", "1949", "323", "no");
let example3 = new Book("Of Mice and Men", "John Steinbeck", "1937", "173", "no");

addBookToLibrary(example1);
addBookToLibrary(example2);
addBookToLibrary(example3);