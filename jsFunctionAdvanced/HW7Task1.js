// Завдання 1
// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, 
// наприклад handleEven та handleOdd. Кожна з них має виводити просте 
// повідомлення в консоль. Наприклад handleEven буде виводити текст 
// “number is even”, a handleOdd буде виводити текст “number is odd”

function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

handleNum(1, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);
handleNum(-5, handleEven, handleOdd);