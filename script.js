const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeRead = function() {
    this.read = !this.read;
}

const showButton = document.getElementById("showDialogButton");
const bookDialog = document.getElementById("modal");
const confirmButton = document.querySelector("#confirm-btn");
const cancelButton = document.querySelector("#cancel-btn");

const title = bookDialog.querySelector("#title");
const author = bookDialog.querySelector("#author");
const pages = bookDialog.querySelector("#pages");

showButton.addEventListener("click", () => {
    bookDialog.showModal();
    document.getElementById("myForm").reset();
});

confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(e);
});

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
});

function addBookToLibrary(e) {
    
    if (read.checked == true) {
        readStatus = true;
    } else {
        readStatus = false;
    }

    let book = new Book(title.value, author.value, pages.value, readStatus);
    myLibrary.push(book);
    console.log(myLibrary);
    bookDialog.close();

    printLibrary();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    printLibrary();
    console.log("test");
}

function changeRead(index) {
    myLibrary[index].changeRead();
    printLibrary();
}

function printLibrary() {
    
    const bookSection = document.querySelector("#books");
    bookSection.innerHTML = "";
    
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        styleBookContainer(bookElement);
        bookElement.innerHTML = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="read-btn" onclick="changeRead(${i})">Toggle Read</button>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        `;
        bookSection.appendChild(bookElement);

    }
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

function styleBookContainer(cont) {
    cont.style.backgroundColor = "#fbda4a";
    cont.style.borderRadius = "15px";
    cont.style.color = "black";
    cont.style.fontSize = "1.7rem";
    cont.style.padding = "20px 20px 10px 30px";
    //cont.classList.add(`book-${title.value}`);
}

function createBookButtons() {
    const bookWindow = document.querySelector(`.book-${title.value}`);
    const buttonDiv = document.createElement("div");
    
    buttonDiv.classList = `btn-div`;
    buttonDiv.style.display = "flex";
    buttonDiv.style.justifyContent = "space-around";
    
    
    bookWindow.appendChild(buttonDiv);

    let addBtn = document.querySelector(`.btn-div`);
    let addRead = document.createElement("button");
    let addDelete = document.createElement("button");
    
    styleButtonRead(addRead);
    styleButtonDelete(addDelete);

    addBtn.appendChild(addRead);
    addBtn.appendChild(addDelete);
}
