let myLibrary = [];

const bookCardsList = document.querySelector('#bookCardContainer');
const newBookButton = document.querySelector('#newBookButton')
const addButton = document.querySelector('#addButton')
const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputYear = document.querySelector('#inputYear');
const inputPages = document.querySelector('#inputPages');
const inputCheckBox = document.querySelector('#inputCheckBox');
const formContainer = document.querySelector('#formContainer');

function Book(title, author, year, pages, isRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.isRead = isRead;
    this.info = [title, "By: " + author, "Published: " + year , "Number of pages: " + pages, isRead];
}

const addBookToLibrary = (newBook) => {
    bookCardsList.innerHTML = '';
    myLibrary.push(newBook);
    showMyLibrary();
}

const showMyLibrary = () => myLibrary.map(book => {
    let newCard = document.createElement("div");
    newCard.className = "bookCard";
    bookCardsList.append(newCard);
    addCardElement(newCard, book.info);

    let e = document.createElement('button');
    e.classList = "readToggle";
    if (book.isRead == "no") {
        toggleUnread(e)
    } else {
        toggleRead(e)
    }
    newCard.lastChild.remove();
    newCard.append(e);
})

const addCardElement = (newCard, info) => {
    let a = document.createElement('button');
    a.classList = "delete";
    a.innerHTML = "×";
    newCard.append(a);
    info.map(element => {
        let e = document.createElement('p');
        e.innerHTML = element;
        newCard.append(e)
    })
}

addButton.onclick = () => {
    if (inputTitle.value && inputAuthor.value && inputYear.value && inputPages.value) {
        let checked = "";
        if (inputCheckBox.checked) {
            checked = "yes";
        } else {
            checked = "no";
        }
        let newBook = new Book(inputTitle.value, inputAuthor.value, inputYear.value, inputPages.value, checked);
        addBookToLibrary(newBook);
        formContainer.style.visibility = "hidden";
    } else {
        return;
    }
}

newBookButton.onclick = () => {
    formContainer.style.visibility = "visible";
    inputTitle.value = null;
    inputAuthor.value = null;
    inputYear.value = null;
    inputPages.value = null;
    inputCheckBox.checked = false;
}

const deleteButton = document.querySelectorAll('.delete');


document.onclick = (e) => {
    if (e.target.innerHTML == '×') {
        let div = e.target.parentNode;
        let a = div.children[1].innerHTML;
        myLibrary = myLibrary.filter(book => {
            if (book.title !== a) {
                return true;
            }
        })
        div.remove();
    }
    if (e.target.className == "readToggle") {
        let div = e.target.parentNode;
        let a = div.children[1].innerHTML;
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
}




let toggleUnread = (e) => {
   if (isRead = "no") {
        e.style.border = "2px solid #d45555";
        e.style.color = "#d45555"
        e.innerHTML = "Not read"
    }
}



let toggleRead = (e) => {
   e.style.border = "2px solid #56b689";
    e.style.color = "#56b689"
    e.innerHTML = "Read"
}


let exampleBook1 = new Book("Animal Farm", "George Orwell", "1945", "345", "yes");
let exampleBook2 = new Book("1984", "George Orwell", "1949", "323", "no");
let exampleBook3 = new Book("Of Mice and Men", "John Steinbeck", "1937", "173", "no");
addBookToLibrary(exampleBook1);
addBookToLibrary(exampleBook2);
addBookToLibrary(exampleBook3);