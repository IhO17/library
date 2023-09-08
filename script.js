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
    let book = new Book(title.value, author.value, pages.value, read.value);
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
    const addbook = document.createElement("div");
    addbook.style.backgroundColor = "#fbda4a";
    addbook.style.borderRadius = "15px";
    addbook.style.color = "black";
    addbook.style.fontSize = "1.7rem";
    addbook.style.padding = "20px 20px 10px 30px";
    addbook.classList.add(`book-${title.value}`);
    bookSection.appendChild(addbook);
    const bookWindow = document.querySelector(`.book-${title.value}`);

    for (x in arguments) {
        let addline = document.createElement("div");
        addline.style.margin = "10px";
        addline.style.textAlign = "center";
        if (arguments[x] === pages) {
            addline.textContent = `${arguments[x].value} pages`;
        } else {
            addline.textContent = `${arguments[x].value}`;
        }

        //if (arguments[x] === read && ) {
        //    addline.textContent = `READ`;
        //} else if (arguments[x] === read && ) {
        //    addline.textContent = `NOT READ`;
        //}
        bookWindow.appendChild(addline);
    }

    let buttonDiv = document.createElement("div");
    buttonDiv.classList = "btn-div";
    buttonDiv.style.display = "flex";
    buttonDiv.style.justifyContent = "space-around";
    buttonDiv.style.marginTop = "40px";

    bookWindow.appendChild(buttonDiv);
    let addBtn = document.querySelector(".btn-div");

    let addbutton = document.createElement("button");
    let addDelete = document.createElement("button");
    
    styleButton(addbutton);
    styleButton(addDelete);
    addDelete.style.backgroundColor = "#dc2626";
    addDelete.classList = "delete-btn";
    addDelete.textContent = "Delete";
    addbutton.textContent = "Read";

    addBtn.appendChild(addbutton);
    addBtn.appendChild(addDelete);

    const readButton = document.querySelector(".read-btn");
    const deleteButton = document.querySelector(".delete-btn");

    readButton.addEventListener("click", () => {
        //add function to change state of READ
        console.log("heh");
    })

    //add another button for deletion
    
    const ReButton = document.querySelector('.read-btn');
    const DelButton = document.querySelector('.delete-btn');

    
    ReButton.addEventListener('mouseover', () => {
        ReButton.style.backgroundColor = "#16a34a8b";
    })

    ReButton.addEventListener('mouseout', () => {
        ReButton.style.backgroundColor = "#16a34a";
    })

    DelButton.addEventListener('mouseover', () => {
        DelButton.style.backgroundColor = "#dc262662";
    })

    DelButton.addEventListener('mouseout', () => {
        DelButton.style.backgroundColor = "#dc2626";
    })
    
    ReButton.addEventListener("click", () => {
        if (addbutton.textContent === "Read") {
            addbutton.textContent = "Not Read";
        } else {
            addbutton.textContent = "Read";
        }
    })

    DelButton.addEventListener("click", () => {
        
    })

}

function styleButton(button) {   
    button.classList = "read-btn";
    button.style.height = "38px";
    button.style.width = "120px";
    button.style.marginTop = "30px";
    button.style.fontSize = "1.3rem";
    button.style.color = "white";
    button.style.backgroundColor = "#16a34a";
    button.style.borderRadius = "10px";
}


