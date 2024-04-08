/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

console.log(hamburger === 3 && cola === 2);
console.log(fries === 3 && nuggets);
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


if (hamburger && fries) {
  console.log('ok');
}

console.log(NaN || 2 || undefined); // 2
console.log(NaN && 2 && undefined); // NaN
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 && null || !3); // false
console.log(NaN || null || !3 || undefined || 5); // 5
console.log(NaN || null && !3 && undefined || 5); // 5
console.log(5 === 5 && 3 > 1 || 5); // true