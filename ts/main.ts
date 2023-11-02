class Book {

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
 * is invalid, null will be returned.
 */
function getBook():Book {

}

/**
 * Add a Book object to web storage. Assumes 
 * all data is valid
 * @param b The Book containing valid data to be added
 */
function addBook(b:Book):void{

}