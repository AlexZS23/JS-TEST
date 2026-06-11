// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedArray = numbersList.slice();

// numbersList[0] = 100;
// copiedArray[1] = 500;

copiedArray.sort((a, b) => a - b);

console.log(`The first unsorted array: ${numbersList}`);
console.log(`The new sorted array: ${copiedArray}`);