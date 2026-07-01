export class Book {

    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    printInfo() {
        console.log(`The "${this.title}" book by ${this.author} was published in ${this.publicationYear}`)
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (typeof title !== 'string' || title.length <= 1) {
            console.log("The title should contain at least two symbols")
            return
        }
        this._title = title
    }

    get author() {
        return this._author;
    }

    set author(author) {
        if (typeof author !== 'string' || author.length <= 1) {
            console.log("The Author name should contain at least two symbols")
            return
        }
        this._author = author
    }

    get publicationYear() {
        return this._publicationYear;
    }

    set publicationYear(publicationYear) {
        if (typeof publicationYear !== 'number' || publicationYear <= 0) {
            console.log('Pay attention that the "Publication year" should be a positive number!');
            return;
        }
        this._publicationYear = publicationYear;
    }

    // 1st Variant
    static getOldestBook(books) {
        let theOldestBook = books[0];

        for (const book of books) {
            if (book.publicationYear < oldestBook.publicationYear) {
                oldestBook = book;
            }
        }
        return oldestBook;
    }

    // 2nd Variant
    static oldestBook(book) {
        let oldestBook = book[0];

        for (let i = 0; i < book.length; i++) {
            if (book[i].publicationYear < oldestBook.publicationYear) {
                oldestBook = book[i];
            }
        }
        return oldestBook;
    }
}

