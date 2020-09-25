"use strict";
// a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
// b) Create a function that takes an IBook instance and test it with an object instance.
const createBook = (title, author, published, pages) => {
    return {
        title,
        author,
        published,
        pages,
    };
};
const getAuthorFromBook = (book) => {
    return book.author;
};
const book = createBook("Some Title", "Some Author", new Date(), 123);
console.log(getAuthorFromBook(book));
const magazine = book;
const book2 = createBook("Book2", "Some Author");
console.log(book2);
const book3 = createBook("Book3", "Some Author");
book3.author = "Something else"; // Throws up...
// Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book {
    constructor(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
}
// This should work....
// class SmarterBook implements IBook {
//   constructor(title: string, author: string, published: Date, pages: number) {}
// }
//# sourceMappingURL=interfaces_1.js.map