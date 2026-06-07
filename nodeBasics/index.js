import chalk from "chalk";

let name = 'Alex'
let birthDate = 'too many years ago'

console.log(chalk.blue('Who was born ' + birthDate + '? ')) 
console.log('Answer:' + chalk.yellow(name));