const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const showButton = document.getElementById("showDialogButton");
const bookDialog = document.getElementById("modal");
const confirmButton = document.querySelector("#confirm-btn");
const bookSection = document.querySelector("#books");
const cancelButton = document.querySelector("#cancel-btn");


showButton.addEventListener("click", () => {
    bookDialog.showModal();
    document.getElementById("myForm").reset();
});


confirmButton.addEventListener("click", (e) => {
    confirmBtn(e);
});

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
});

function confirmBtn(e) {
    e.preventDefault();
    
    const title = bookDialog.querySelector("#title");
    const author = bookDialog.querySelector("#author");
    const pages = bookDialog.querySelector("#pages");
    const read = bookDialog.querySelector("#read");

    let readStatus = "NOT READ";

    if (read.checked == true) {
        readStatus = "READ";
    }
    
    let book = new Book(title.value, author.value, pages.value, readStatus);
    addBookToLibrary(book);
    printBook(title, author, pages);
    console.log(myLibrary);
    bookDialog.close();
}

function deleteLibrary () {
    const books = document.querySelector("#books");
    const book = books.querySelectorAll("div");
    book.forEach(div => div.remove());
}

//function printLibrary() {
//
//    myLibrary.forEach(book => {
//        const addbook = document.createElement("div");
//        addbook.style.backgroundColor = "#3b82f6";
//        addbook.style.borderRadius = "15px";
//        addbook.style.color = "white";
//        addbook.style.fontSize = "1.7rem";
//        addbook.style.padding = "30px 20px 20px 30px";
//        addbook.classList.add(`book-${book.title}`);
//        bookSection.appendChild(addbook);
//        const bookWindow = document.querySelector(`.book-${book.title}`);
//        
//        for (let value in book) {
//            
//            const addline = document.createElement("div");
//            addline.style.margin = "10px";
//            addline.style.textAlign = "center";
//            addline.textContent = `${book[value]}`;
//            bookWindow.appendChild(addline);
//        }
//    })
//}

function printBook(title, author, pages) {

    createBookContainer();
    addBookText(title, author, pages);
    createBookButtons();
    readDeleteButtonEvents();
}

function readDeleteButtonEvents () {
    const readButton = document.querySelector(".read-btn");
    const deleteButton = document.querySelector(".delete-btn");
    
    //read button :hover effect
    readButton.addEventListener('mouseover', () => {
        readButton.style.backgroundColor = "#16a34a8b";
    })
    readButton.addEventListener('mouseout', () => {
        readButton.style.backgroundColor = "#16a34a";
    })
    
    //delete button :hover effect
    deleteButton.addEventListener('mouseover', () => {
        deleteButton.style.backgroundColor = "#dc262662";
    })
    deleteButton.addEventListener('mouseout', () => {
        deleteButton.style.backgroundColor = "#dc2626";
    })

    
    readButton.addEventListener("click", () => {
        if (readButton.textContent === "Read") {
            readButton.textContent = "Not Read";
        } else {
            readButton.textContent = "Read";
        }
    })

    deleteButton.addEventListener("click", () => {

    })
}

function createBookContainer() {
    //create empty div for a single book entry
    const addbook = document.createElement("div");
    addbook.style.backgroundColor = "#fbda4a";
    addbook.style.borderRadius = "15px";
    addbook.style.color = "black";
    addbook.style.fontSize = "1.7rem";
    addbook.style.padding = "20px 20px 10px 30px";
    addbook.classList.add(`book-${title.value}`);
    bookSection.appendChild(addbook);
}

function styleButtonRead(button) {   
    button.classList = "read-btn";
    button.style.height = "38px";
    button.style.width = "120px";
    button.style.marginTop = "30px";
    button.style.fontSize = "1.3rem";
    button.style.color = "white";
    button.style.backgroundColor = "#16a34a";
    button.style.borderRadius = "10px";
    button.textContent = "Read";
}

function styleButtonDelete(button) {   
    button.classList = "delete-btn";
    button.style.height = "38px";
    button.style.width = "120px";
    button.style.marginTop = "30px";
    button.style.fontSize = "1.3rem";
    button.style.color = "white";
    button.style.backgroundColor = "#dc2626";
    button.style.borderRadius = "10px";
    button.textContent = "Delete";
}

function createBookButtons() {
    const bookWindow = document.querySelector(`.book-${title.value}`);
    let buttonDiv = document.createElement("div");
    
    buttonDiv.classList = `btn-div-${title.value}`;
    buttonDiv.style.display = "flex";
    buttonDiv.style.justifyContent = "space-around";
    buttonDiv.style.marginTop = "40px";
    
    bookWindow.appendChild(buttonDiv);
    let addBtn = document.querySelector(`.btn-div-${title.value}`);

    let addRead = document.createElement("button");
    let addDelete = document.createElement("button");
    
    styleButtonRead(addRead);
    styleButtonDelete(addDelete);

    addBtn.appendChild(addRead);
    addBtn.appendChild(addDelete);
}

function addBookText(title, author, pages) {
    
    //selects container
    const bookWindow = document.querySelector(`.book-${title.value}`);

    for (x in arguments) {
        let addline = document.createElement("div");
        addline.style.margin = "10px";
        addline.style.textAlign = "center";

        //add "pages" when needed
        if (arguments[x] === pages) {
            addline.textContent = `${arguments[x].value} pages`;
        } else {
            addline.textContent = `${arguments[x].value}`;
        }

        bookWindow.appendChild(addline);
    }

}