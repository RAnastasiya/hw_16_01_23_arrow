"use strict";

// const getFactorial = (number) => {
//   if (typeof number !== "number") throw new TypeError("number must be number");
//   if (number > 10000 || number < 0)
//     throw new RangeError("number must be 0..10000");
//   if (number === 0) return 1;
//   return number * getFactorial(number - 1);
// };

// try {
//   console.log(getFactorial(5));
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log('finally')
// }

// const power = (base, exp) => {
//   if (exp < 0) {
//     return 1 / power(base, -exp);
//   }
//   if (exp === 0) return 1;
//   return base * power(base, exp - 1);
// };
// console.log(power(4, -4));

/*
написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
кількість пар дорівнює прийнятому аргументу.
якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
//pairBrickets(4) => '(((())))'

//pairBrickets(-4) => '()'
//pairBrickets('qwe') => throw
*/
const pairBrickets = (num) => {
  if (typeof num !== "number") throw new TypeError("num must be number");
  if (num < 0) return "()";
  if (num === 0) return "";
  return "(" + pairBrickets(num - 1) + ")";
};

try {
  console.log(pairBrickets(0));
} catch (error) {
  console.log(error);
} finally {
  console.log("finally");
}

/*
написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
// getDivider(24, 15) -> 3
// getDivider(3, 3) -> 3
// getDivider(7, 3) -> 1

Алгоритм Евкліда дозволяє знайти НСД двох натуральних чисел.
Суть алгоритму Евкліда – два числа порівнюють і від більшого віднімають менше до тих пір, поки числа не стануть рівними. Число, якому вони стануть рівними, і є їх найбільший спільний дільник.
 */