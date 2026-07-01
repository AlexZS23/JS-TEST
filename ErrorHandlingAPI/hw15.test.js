const axios = require('axios');
const BooksController = require('./BooksController');

let bookId;
const randomValue = Math.random().toString(36).substring(2, 8);
let generatedToken;
let userId;

test('Get All books', async () => {
    const response = await BooksController.getAllBooks();
    expect(response.status).toBe(200);
    expect(response.data.books).toHaveLength(8);
    bookId = response.data.books[7].isbn;
})

test('Get specific book', async () => {
    const response = await BooksController.getBookByIsbn(bookId);
    const bookData = response.data;
    expect(response.status).toBe(200);
    expect(bookData.title).toBe('Understanding ECMAScript 6');
    expect(bookData.description.length).toBeGreaterThan(50);
})

test('Get book with invalid ID', async () => {
    const response = await BooksController.getBookByIsbn(randomValue);
    expect(response.status).toBe(400);
    expect(response.data.message).toBe('ISBN supplied is not available in Books Collection!')
})

test('User login', async () => {
    const resonse = await BooksController.userLogIn('AlexAir', '!SC25Rhi@VzB!ew');
    generatedToken = resonse.data.token;
    userId = resonse.data.userId;
    expect(resonse.status).toBe(200);
    expect(resonse.data.token).not.toBeNull();
})

test('Add book to My collection', async () => {
    const resonse = await BooksController.addBookToCollection(userId, bookId, generatedToken);
    expect(resonse.status).toBe(201);
});

test('Delete book from My collection', async () => {
    const response = await BooksController.deleteBook(userId, bookId, generatedToken);
    expect(response.status).toBe(204);
});