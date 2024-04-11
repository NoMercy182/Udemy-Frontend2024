/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

// isPowerOfThree.js
// Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 1 – это нулевая степень (считаем ноль натуральным числом): 3^0, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

// Примеры:

// isPowerOfThree(1); // true (3^0)
// isPowerOfThree(2); // false
// isPowerOfThree(9); // true (3^2)

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));


function isPowerOfThree(n) {
  if (n == 1) {
    return 1;
  }
  if (n % 3 !== 0) {
    return false;
  }
  return  isPowerOfThree(n / 3);
}

console.log(isPowerOfThree(7));


function fo(n) {
  if (n === 1) {
    return 1;
  }
  return n * fo(n - 1);
}