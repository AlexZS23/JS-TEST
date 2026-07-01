// Завдання 3
// Виконайте завдання 2, але використовуючи конструкцію async/await для функції, що виконує запити

async function getTodoInfo(todoId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    return data;
}

async function getUserInfo(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
}

const todoInfo = getTodoInfo(1);
const userInfo = getUserInfo(1);

const allData = Promise.all([todoInfo, userInfo]);

allData
    .then(result => console.log(result))
    .catch(error => console.error(error));

const raceData = Promise.race([todoInfo, userInfo]);

raceData
    .then(result => console.log(result))
    .catch(error => console.error(error));