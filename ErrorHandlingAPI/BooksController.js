const axios = require('axios');

class BooksController {
    constructor() {
        this.axiosBaseURL = axios.create(
            {
                baseURL: 'https://demoqa.com',
                validateStatus: () => true
            }
        )
    }

    async userLogIn(userName, password) {
        return await this.axiosBaseURL.post('/Account/v1/Login', {
            userName,
            password
        });
    }

    async getAllBooks() {
        return await this.axiosBaseURL.get('/BookStore/v1/Books')
    }

    async getBookByIsbn(isbn) {
        return await this.axiosBaseURL.get(`/BookStore/v1/Book?ISBN=${isbn}`)
    }

    async addBookToCollection(userId, isbn, token) {
        return await this.axiosBaseURL.post('/BookStore/v1/Books', {
            userId,
            collectionOfIsbns: [{
                isbn
            }]
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    async deleteBook(userId, isbn, token) {
        return await this.axiosBaseURL.delete('/BookStore/v1/Book',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    userId,
                    isbn
                }
            });
    }
}

module.exports = new BooksController();