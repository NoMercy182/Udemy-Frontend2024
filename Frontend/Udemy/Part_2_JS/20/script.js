/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

if (4 == 9) {
  console.log('ok');
} else {
  console.log('error');
}

const num = 50;

// if (num < 49) {
//   console.log('error');
// } else if (num > 100) {
//   console.log('to much');
// } else {
//   console.log('ok');
// }

(num == 50) ? console.log('yes, num == 50') : console.log('error');

const number = 50;

switch (number) {
  case 49:
    console.log('no');
    break;
  case 70:
    console.log('no');
    break;
  case 500:
    console.log('ok!');
    break;
  default:
    console.log('not now');
    break;
}