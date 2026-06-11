// 1. Створіть клас "Книга"(Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
// 2. В окремому файлі створіть клас "Електронна книга"(EBook), який буде успадковувати властивості та методи класу
// Book.Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook
// (все те саме що і для Book але ще формат файлу).Створіть інстанс(екземпляр) класу EBook та викличте метод printInfo
// 3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. 
// Використовуйте їх для зміни та отримання значень властивостей.
// 4. Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати 
// найдавнішу книгу за роком видання.Викличте його в коді передавши масив книг
// (серед них мають бути екземляри обох класів Book та EBook)
// 5. Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу 
// як рядок **** та повертати екземпляр класу EBook

import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book('The Secret of Secrets', 'Dan Brown', 2025);
book1.printInfo();
console.log("---------------------------");

const book2 = new Book('The Green mile', 'Stephen King', 1999);
book2.printInfo();
console.log("---------------------------");

const ebook1 = new EBook('The Lord of the Rings', 'J. R. R. Tolkien', 2007, 'pdf');
ebook1.printInfo();
console.log("---------------------------");

const ebook2 = new EBook('2', 'Name2', 2001, 'epub');
ebook2.printInfo();
console.log("---------------------------");

let booksArray = [book1, book2, ebook1, ebook2];
console.log('The oldest book is:'); console.log(Book.oldestBook(booksArray));
console.log("---------------------------");

const ebook3 = EBook.combinedMethod(book1, 'fb2');
console.log(`The data from p.5 is: ${ebook3.title}, ${ebook3.author}, ${ebook3.publicationYear}, ${ebook3.fileFormat}`);