"use strict";

/*
1)написати фукцію стрілку, яка приймає джерельний масив
і повертає масив з двох значень,
які є мінімальним і максимальним значенням джерельного масиву
якщо джерельний масив порожній, то функція повертає порожній масив
*/

const getNewArr = (arr) => {
  return arr.length === 0 ? arr : [Math.min(...arr), Math.max(...arr)];
};

console.log(getNewArr([2, 5, 7, 3, 33, 5, 4, 3, 9]));
console.log(getNewArr([]));

/*
2)написати функцію стрілку, яка приймає безліч аргументів
і повертає результат їх множення, якщо аргументів не має - повертає null
*/

const getMultiplication = (...args) => {
    return args.length === 0 ? null : args.reduce((accumulator, currentValue) => accumulator * currentValue)
};

console.log(getMultiplication());
console.log(getMultiplication(3, 3, 4, 5, 6, null, 2));
console.log(getMultiplication(2, 3));

/*
3)переписати функцію, що нижче на функцію стрілку
function askUser(quetion){
const userInput = confirm(quetion);
if(userInput){
return 'ok';
}
return 'error';
}
*/

const askUser = (quetion) => confirm(quetion) ? 'ok' : 'error'
