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

//let book1 = new Book("Golum", "JRR", 302, "not read");
//let book2 = new Book("HP", "Rofling", 452, "read");
//let book3 = new Book("PEP", "Rofling", 452, "read");
//let book4 = new Book("Kskek", "Rofling", 452, "read");
//
//addBookToLibrary(book1);
//addBookToLibrary(book2);
//addBookToLibrary(book3);
//addBookToLibrary(book4);


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
    e.preventDefault();
    
    const title = bookDialog.querySelector("#title");
    const author = bookDialog.querySelector("#author");
    const pages = bookDialog.querySelector("#pages");
    const read = bookDialog.querySelector("#read");
    let book = new Book(title.value, author.value, pages.value, read.value);
    //addBookToLibrary(book);
    printBook(title, author, pages, read);
    bookDialog.close();
    //removeLibrary();
    //printLibrary();
});

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
});

function printBook(title, author, pages, read) {
    const addbook = document.createElement("div");
    addbook.style.backgroundColor = "#3b82f6";
    addbook.style.borderRadius = "15px";
    addbook.style.color = "white";
    addbook.style.fontSize = "1.7rem";
    addbook.style.padding = "30px 20px 20px 30px";
    addbook.classList.add(`book-${title.value}`);
    bookSection.appendChild(addbook);
    const bookWindow = document.querySelector(`.book-${title.value}`);
    console.log(`book-${title}`);

    for (x in arguments) {
        let addline = document.createElement("div");
        addline.style.margin = "10px";
        addline.style.textAlign = "center";
        addline.textContent = `${arguments[x].value}`;
        bookWindow.appendChild(addline);
    }
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
//
//function removeLibrary() {
//    const elements = bookSection.querySelectorAll("div");
//    elements.forEach((div) => {
//            bookSection.removeChild("div");
//    })
//}

