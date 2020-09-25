// a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:

interface IBook {
  title: string;
  author: string;
  published: Date;
  pages: number;
}

// b) Create a function that takes an IBook instance and test it with an object instance.

const createBook = (
  title: string,
  author: string,
  published?: Date,
  pages?: number
): IBook => {
  return {
    title,
    author,
    published,
    pages,
  };
};

const getAuthorFromBook = (book: IBook): string => {
  return book.author;
};

const book: IBook = createBook("Some Title", "Some Author", new Date(), 123);

console.log(getAuthorFromBook(book));

// c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
/*
    The term stems from the fact that TypeScript doesent check wheter it IS a duck, but whether it
    walks like a duck, quacks like a duck etc.
*/

// Meaning that i could do this:
interface IProduct {
  title: string;
  published: Date;
}

const magazine: IProduct = book;

// Even though book magazine implements IProduct and not IBook, I can still asign book the const
// since the book has the two properties that IProduct is looking for; title, published.

// d) Change the interface to make published and pages become optional - Verify the new behaviour.

interface IBook2 {
  title: string;
  author: string;
  published?: Date;
  pages?: number;
}

const book2: IBook2 = createBook("Book2", "Some Author");
console.log(book2);

// e) Change the interface to make author readonly - Verify the new behaviour.

interface IBook3 {
  title: string;
  readonly author: string;
  published?: Date;
  pages?: number;
}

const book3: IBook3 = createBook("Book3", "Some Author");
book3.author = "Something else"; // Throws up...

// Create a class Book and demonstrate the "Java way" of implementing an interface.

class Book implements IBook {
  title: string;
  author: string;
  published: Date;
  pages: number;

  constructor(title: string, author: string, published: Date, pages: number) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
  }
}

// This should work....
class SmarterBook implements IBook {
  constructor(title: string, author: string, published: Date, pages: number) {}
}
