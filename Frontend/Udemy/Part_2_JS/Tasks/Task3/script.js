/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

// 1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

for (let i = 5; i <= 10; i++) {
  console.log(i);
}

// 2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

for (let i = 20; i >= 10; i--) {
  if (i === 13) break;
  console.log(i);
}

// 3) При помощи цикла for выведите чётные числа от 2 до 10 включительно

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4) Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

let num = 2;
while (num <= 10) {
  console.log(num);
  num += 2;
}

// 5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

let arr = [];
let number = 5;

for (let i = 0; i <= 5; i++) {
  arr[i] = number;
  number++;
}

console.log(arr);

// 6) Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

const oldArr = [3, 5, 8, 16, 20, 23, 50];
const newArr = [];

let lenght = oldArr.length;

for (let i = 0; i < lenght; i++) {
  newArr[i] = oldArr[i];
}

console.log(newArr);

// 7) Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];

let dataLenght = data.length;

for (let i = 0; i < dataLenght; i++) {
  if (typeof (data[i]) == 'string') {
    data[i] += ' - done';
  } else {
    data[i] *= 2;
  }
}

console.log(data);

// 8) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const oldData = ['Homework', 20, 'Shopping', 10, 5];
const newData = [];
let oldDataLenght = oldData.length;

// for (let i = oldDataLenght - 1; i >= 0; i--) {
//   newData.push(oldData[i]);
// }

let j = 0;
for (let i = oldDataLenght - 1; i >= 0; i--) {
  newData[j] = oldData[i];
  j++;
}

console.log(newData);

// task 9

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

let str = '1     1';
str = str - '   ';
console.log(str);
