/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log(`${i} - i`);
  for (let j = 0; j < 3; j++) {
    console.log(`${j} - j`);
  }
}

let str = '*';

for (let i = 0; i < 8; i++) {
  console.log(str);
  str += '*';
}


let result = '';
let lenght = 7;

for (let i = 1; i < lenght; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
  console.log(`${i} - first`);
  for (let j = 0; j < 3; j++) {
    console.log(`${j} - second`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`${k} - third`);
    }
  }
}