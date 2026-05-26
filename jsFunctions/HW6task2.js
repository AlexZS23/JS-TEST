// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою)
// в консоль для кожного випадку.

function checkUserAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false
    }
}

console.log(`Is the person adult? ${checkUserAge(25)}`);
console.log(`Is the person adult? ${checkUserAge(15)}`);