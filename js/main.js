class Book {
}
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for beginners";
myBook.releaseDate = new Date(2023, 9, 8);
console.log(myBook);
window.onload = function () {
    let addBookBtn = document.querySelector("#add-book");
    addBookBtn.onclick = processBook;
};
function processBook() {
    console.log("processBook was called");
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
function getBook() {
    let isbnTextBox = document.querySelector("#isbn");
    let titleTextBox = document.querySelector("#title");
    let priceTextBox = document.querySelector("#price");
    let releaseDateTextBox = document.querySelector("#release-date");
    let isValidData = true;
    let isbn = isbnTextBox.value;
    if (!isValidIsbn(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only";
    }
}
function isValidIsbn(data) {
    let regex = /^\d{13}$/;
    return regex.test(data);
}
function addBook(b) {
}