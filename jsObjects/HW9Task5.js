// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: 'Alex', email: 'test1@email.qa', age: 20 },
    { name: 'John', email: 'johny@email.qa', age: 21 },
    { name: 'Yaroslav', email: 'yarik-30@email.qa', age: 30 },
    { name: 'Oleh', email: 'oleh-tes@email.qa', age: 40 }
]

console.log('Variant 1:');
//result1
for (let user of users) {
    console.log(`Data from the "for...of": ${user.name}, ${user.email}, ${user.age}`);
};

console.log('Variant 2:');
// result2
for (const { name, email, age } of users) {
    console.log(`Data from the "for...of" in the Cycle: ${name}, ${email}, ${age}`);
}
console.log('Variant 3:');
// result3

function destructurizationPrint({ name, email, age }) {
    console.log(`Data from the '3rd variant': ${name}, ${email}, ${age}`)
};

for (const user of users) {
    destructurizationPrint(user);
}

