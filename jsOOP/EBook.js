import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, publicationYear, fileFormat) {
        super(title, author, publicationYear);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`The "${this.title}" book by ${this.author} was published in ${this.publicationYear}. The book is available in the "${this.fileFormat}" format.`)
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        if (typeof fileFormat !== 'string' || fileFormat.length <= 1) {
            console.log("The File format should contain at least two symbols")
            return
        }
        this._fileFormat = fileFormat
    }

    static combinedMethod(book, fileFormat) {
        return new EBook(
            book.title,
            book.author,
            book.publicationYear,
            fileFormat
        );
    }
}