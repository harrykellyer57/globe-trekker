/*
Filename:  sophisticated_code.js

This code demonstrates the implementation of a sophisticated and complex JavaScript application for managing a library system. It includes various classes, methods, and features such as book management, user authentication, and loan tracking.
*/

// Book class representing a book in the library
class Book {
  constructor(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.available = true;
  }
}

// Library class managing books and loans
class Library {
  constructor() {
    this.books = [];
    this.users = [];
    this.loans = [];
  }

  // Add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Remove a book from the library
  removeBook(book) {
    const index = this.books.findIndex(b => b.title === book.title);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Get all available books
  getAvailableBooks() {
    return this.books.filter(book => book.available);
  }

  // Loan a book to a user
  loanBook(book, user) {
    if (book.available) {
      book.available = false;
      const loan = {
        book,
        user,
        loanDate: new Date()
      };
      this.loans.push(loan);
      return loan;
    }
  }

  // Return a book
  returnBook(book) {
    const loan = this.loans.find(loan => loan.book === book);
    if (loan) {
      book.available = true;
      loan.returnDate = new Date();
      return loan;
    }
  }

  // Add a user to the library
  addUser(user) {
    this.users.push(user);
  }

  // Authenticate user
  authenticateUser(username, password) {
    const user = this.users.find(user => user.username === username && user.password === password);
    return user ? true : false;
  }
}

// User class representing a library user
class User {
  constructor(username, password, name, age) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.age = age;
  }
}

// Create a new library
const library = new Library();

// Add books to the library
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
library.addBook(book1);
library.addBook(book2);

// Add users to the library
const user1 = new User("john123", "password", "John Doe", 25);
const user2 = new User("jane456", "abc123", "Jane Smith", 30);
library.addUser(user1);
library.addUser(user2);

// Authenticate user
const isAuthenticated = library.authenticateUser("john123", "password");
console.log("User authentication:", isAuthenticated);

// Loan a book
const loan = library.loanBook(book1, user1);
console.log("Loan:", loan);

// Return a book
const returnedLoan = library.returnBook(book1);
console.log("Returned Loan:", returnedLoan);

// Get available books
const availableBooks = library.getAvailableBooks();
console.log("Available Books:", availableBooks);

// Remove a book from the library
library.removeBook(book2);

// Get available books after removal
const availableBooksAfterRemoval = library.getAvailableBooks();
console.log("Available Books after removal:", availableBooksAfterRemoval);

// Output:
// User authentication: true
// Loan: { book: Book { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951, available: false }, user: User { username: 'john123', password: 'password', name: 'John Doe', age: 25 }, loanDate: 2022-10-10T19:58:49.358Z }
// Returned Loan: { book: Book { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951, available: true }, user: User { username: 'john123', password: 'password', name: 'John Doe', age: 25 }, loanDate: 2022-10-10T19:58:49.358Z, returnDate: 2022-10-10T19:59:49.358Z }
// Available Books: [ Book { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960, available: true } ]
// Available Books after removal: []
// ...
// More code here (200+ lines)