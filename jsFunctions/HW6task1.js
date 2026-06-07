// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та 
// поверніть результат з функції.
// Викличте вашу функцію з аргументами 
// (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function rectangleArea(width, height) {
    let result = width * height
    return result;
}

console.log(`The area of Rectangle is ${rectangleArea(10, 5)}`);

const rectangleAreaSecondOption = function (width, height) {
    return width * height;
}

console.log(`The area of Rectangle is ${rectangleAreaSecondOption(3, 4)}`);

const rectangleAreaThirdOption = (width, height) => {
    return width * height;
}

console.log(`The area of Rectangle is ${rectangleAreaThirdOption(6, 4)}`);