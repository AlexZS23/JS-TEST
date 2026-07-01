// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних

function getTodo(todoID) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
        .then(response => response.json());
}

function getUser(userID) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => response.json());
}

const todoInfo = getTodo(1);
const userInfo = getUser(1);

const allData = Promise.all([todoInfo, userInfo]);

allData
    .then(result => console.log(result))
    .catch(error => console.error(error));

const raceData = Promise.race([todoInfo, userInfo]);

raceData
    .then(result => console.log(result))
    .catch(error => console.error(error));