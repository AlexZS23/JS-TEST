const axios = require('axios');

let bookId;
const randomValue = Math.random().toString(36).substring(2, 8);
let generatedToken;
let userId;

test('Get All books', async () => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Books');
    expect(response.status).toBe(200);
    expect(response.data.books).toHaveLength(8);
    bookId = response.data.books[7].isbn;
})

test('Get specific book', async () => {
    const response = await axios.get(`https://demoqa.com/BookStore/v1/Book?ISBN=${bookId}`);
    const bookData = response.data;
    expect(response.status).toBe(200);
    expect(bookData.title).toBe('Understanding ECMAScript 6');
    expect(bookData.description.length).toBeGreaterThan(50);
})

test('Get book with invalid ID', async () => {
    const response = await axios.get(`https://demoqa.com/BookStore/v1/Book?ISBN=${randomValue}`, {
        validateStatus: () => true
    });
    expect(response.status).toBe(400);
    expect(response.data.message).toBe('ISBN supplied is not available in Books Collection!')
})

test('User login', async () => {
    const resonse = await axios.post('https://demoqa.com/Account/v1/Login', {
        "userName": "AlexAir",
        "password": "!SC25Rhi@VzB!ew"
    })
    generatedToken = resonse.data.token;
    userId = resonse.data.userId;
    expect(resonse.status).toBe(200);
    expect(resonse.data.token).not.toBeNull();
})

test('Add book to My collection', async () => {
    const resonse = await axios.post('https://demoqa.com/BookStore/v1/Books', {
        userId: userId,
        collectionOfIsbns: [{
            isbn: bookId
        }]
    }, {
        headers: {
            Authorization: `Bearer ${generatedToken}`
        }
    });
    expect(resonse.status).toBe(201);
});

test('Delete book from My collection', async () => {
    const response = await axios.delete(
        'https://demoqa.com/BookStore/v1/Book',
        {
            headers: {
                Authorization: `Bearer ${generatedToken}`
            },
            data: {
                userId: userId,
                isbn: bookId
            }
        }
    );

    expect(response.status).toBe(204);
});