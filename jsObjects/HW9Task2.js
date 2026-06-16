// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: рядок, представляє ім'я власника автомобіля
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
    title: 'Angels and Demons',
    author: 'Dan Brown',
    year: 2000
};

const { title, author } = book;

console.log(`The author of the "${title}" book is ${author}.`);