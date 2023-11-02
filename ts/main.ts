class Book {
    /**
     * The 13 digit ISBN number
     */
    isbn: string;

    title: string;

    price: number

    releaseDate : Date;
}

// Book object est code
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for beginners";
myBook.releaseDate = new Date (2023, 9, 8);

console.log(myBook);


window.onload = function() {
    // Set up button click for add book form 
    let addBookBtn = document.querySelector("#add-book") as HTMLButtonElement;
    addBookBtn.onclick = processBook;
    
}

function processBook(){
    console.log("processBook was called")

    let userBook = getBook();
    if (userBook != null){
        addBook(userBook);
    }
}

/**
 * This function will retrieve all the book
 * data from the HTML page. If all data is valid
 * a Book object will be returned. If any data
 * is invalid, null will be returned and error messages
 * will be shown on the web page.
 */
function getBook():Book {
    // Get all inputs
    let isbnTextBox = document.querySelector("#isbn") as HTMLInputElement;
    let titleTextBox = document.querySelector("#title") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let releaseDateTextBox = document.querySelector("#release-date") as HTMLInputElement;

    // Validate data 
    let isValidData:boolean = true;

    // Validate the ISBN
    let isbn:string = isbnTextBox.value;
    if (!isValidIsbn(isbn)){
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only"
    }

    
}

/**
 * This validates an ISBN 13 number, Returns true 
 * if the ISBN only consists of 13 digit characters
 * @param data The string to be validated
 * @returns True if data is a valid ISBN 13
 */
function isValidIsbn(data: string){
let regex = /^\d{13}$/; // matches 13 digits exactly
return regex.test(data);
}

/**
 * Add a Book object to web storage. Assumes 
 * all data is valid
 * @param b The Book containing valid data to be added
 */
function addBook(b:Book):void{

}