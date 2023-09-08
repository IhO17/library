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

let book1 = new Book("Golum", "JRR", 302, "not read");
let book2 = new Book("HP", "Rofling", 452, "read");
let book3 = new Book("PEP", "Rofling", 452, "read");

let book4 = new Book("Kskek", "Rofling", 452, "read");
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

addBookToLibrary(book4);


const showButton = document.getElementById("showDialogButton");
const bookDialog = document.getElementById("modal");
const confirmButton = document.querySelector("#confirm-btn");
const bookSection = document.querySelector("#books");


showButton.addEventListener("click", () => {
    bookDialog.showModal();
});


confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
});
 

myLibrary.forEach(book => {
    
    const addbook = document.createElement("div");
    addbook.style.backgroundColor = "#3b82f6";
    addbook.style.borderRadius = "15px";
    addbook.style.color = "white";
    addbook.style.fontSize = "1.7rem";
    addbook.style.padding = "30px 20px 20px 30px";
    addbook.classList.add(`book-${book.title}`);
    bookSection.appendChild(addbook);
    const bookWindow = document.querySelector(`.book-${book.title}`);

    for (let value in book) {
        
        const addline = document.createElement("div");
        addline.style.margin = "10px";
        addline.style.textAlign = "center";
        addline.textContent = `${book[value]}`;
        bookWindow.appendChild(addline);
    }
})
