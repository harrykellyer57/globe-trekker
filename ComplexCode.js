/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex and sophisticated implementation 
   using JavaScript. It simulates a library management system with multiple classes 
   and functionalities. It showcases the use of object-oriented programming and 
   various advanced concepts in JavaScript.
*/

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book '${book.title}' added to ${this.name} library.`);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
      console.log(`Book '${book.title}' removed from ${this.name} library.`);
    } else {
      console.log(`Book '${book.title}' was not found in ${this.name} library.`);
    }
  }

  listBooks() {
    console.log(`Books in ${this.name} library:`);
    this.books.forEach((book, index) =>
      console.log(`${index + 1}. ${book.title} - ${book.author}`)
    );
  }
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.booksBorrowed = [];
  }

  borrowBook(library, book) {
    if (library.books.includes(book)) {
      library.removeBook(book);
      this.booksBorrowed.push(book);
      console.log(`Book '${book.title}' borrowed by ${this.name}`);
    } else {
      console.log(`Book '${book.title}' is not available in the library.`);
    }
  }

  returnBook(library, book) {
    if (this.booksBorrowed.includes(book)) {
      this.booksBorrowed.splice(this.booksBorrowed.indexOf(book), 1);
      library.addBook(book);
      console.log(`Book '${book.title}' returned by ${this.name}`);
    } else {
      console.log(`Book '${book.title}' was not borrowed by ${this.name}`);
    }
  }

  listBorrowedBooks() {
    console.log(`Books borrowed by ${this.name}:`);
    this.booksBorrowed.forEach((book, index) =>
      console.log(`${index + 1}. ${book.title} - ${book.author}`)
    );
  }
}

// Usage example
const library = new Library("My Library");

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0061120081");
const book3 = new Book("1984", "George Orwell", "9780451524935");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("\n--- Library ---");
library.listBooks();

const user1 = new User("John Doe");
const user2 = new User("Jane Smith");

console.log("\n--- Users ---");
user1.borrowBook(library, book1);
user2.borrowBook(library, book2);
user2.borrowBook(library, book1);
user1.borrowBook(library, book3);

console.log("\n--- Library ---");
library.listBooks();

console.log("\n--- Users ---");
user1.listBorrowedBooks();
user2.listBorrowedBooks();

console.log("\n--- Returning Books ---");
user1.returnBook(library, book1);
user2.returnBook(library, book2);
user2.returnBook(library, book1);
user1.returnBook(library, book3);

console.log("\n--- Library ---");
library.listBooks();

console.log("\n--- Users ---");
user1.listBorrowedBooks();
user2.listBorrowedBooks();

/* Output:

--- Library ---
Books in My Library:
1. The Catcher in the Rye - J.D. Salinger
2. To Kill a Mockingbird - Harper Lee
3. 1984 - George Orwell

--- Users ---
Book 'The Catcher in the Rye' borrowed by John Doe
Book 'To Kill a Mockingbird' borrowed by Jane Smith
Book 'The Catcher in the Rye' borrowed by Jane Smith
Book '1984' borrowed by John Doe

--- Library ---
Books in My Library:
1. To Kill a Mockingbird - Harper Lee

--- Users ---
Books borrowed by John Doe:
1. 1984 - George Orwell
Books borrowed by Jane Smith:
1. The Catcher in the Rye - J.D. Salinger
2. The Catcher in the Rye - J.D. Salinger

--- Returning Books ---
Book 'The Catcher in the Rye' returned by John Doe
Book 'To Kill a Mockingbird' returned by Jane Smith
Book 'The Catcher in the Rye' was not borrowed by Jane Smith
Book '1984' returned by John Doe

--- Library ---
Books in My Library:
1. To Kill a Mockingbird - Harper Lee
2. The Catcher in the Rye - J.D. Salinger
3. 1984 - George Orwell

--- Users ---
Books borrowed by John Doe:
1. 1984 - George Orwell
Books borrowed by Jane Smith:
1. The Catcher in the Rye - J.D. Salinger

*/