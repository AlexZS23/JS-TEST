// Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел
// Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел
//  у заданому масиві чисел.
// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись 
// для відстеження кількості позитивних, негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну
//  (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.

const numbers = ['a', 4, -5, 0, 0, 8, 10, 15, -1, 2];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        zeroCount++
    } else if (numbers[i] < 0) {
        negativeCount++
    } else if (numbers[i] > 0) {
        positiveCount++
    };
}

console.log(`Кількість нульових чисел: ${zeroCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість позитивних чисел: ${positiveCount}`);