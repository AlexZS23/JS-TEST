// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - 
// “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

function checkOrder(available, ordered) {
    let result = ''
    if (available < ordered) {
        result = 'Your order is too large, we don’t have enough goods.'
    } else if (ordered === 0) {
        result = 'Your order is empty!'
    } else {
        result = 'Your order is accepted!'
    }
    return result;
}

console.log(checkOrder(15, 16));
console.log(checkOrder(15, 0));
console.log(checkOrder(15, 10));