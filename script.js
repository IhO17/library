const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//let book1 = new Book("Golum", "JRR", 302, "not read");
//let book2 = new Book("HP", "Rofling", 452, "read");
//
//addBookToLibrary(book1);
//addBookToLibrary(book2);
//
//console.log(myLibrary)

const showButton = document.getElementById("showDialog");
const bookDialog = document.getElementById("modal");
const confirmButton = bookDialog.querySelector("#confirm-btn");

//const ConfirmButton = bookDialog.querySelector("#confirm-btn");

showButton.addEventListener("click", () => {
    bookDialog.showModal();
});


