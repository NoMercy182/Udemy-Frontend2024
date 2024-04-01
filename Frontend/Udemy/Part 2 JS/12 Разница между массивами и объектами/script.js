/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'use strict';

const arr = ['a', 'b', 'c'];

const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c'
};

const bob = 'bob';

arrObj[bob] = '1234';

console.log(arrObj['b']);
console.log(arrObj.bob);

console.log(arr[1]);

const obj = {
	Anna: 500,
	Alice: 800
};

const oobj = {
  doll: 'Alice'
};

const surname = 'girl';
oobj[surname] = 'girlfriend';

console.log(oobj['doll']);
console.log(oobj.girl);

const dataNames = {
  user1: 'Dima_Voronin'
};

const userName = 'Alena_Bohanko';

dataNames.user2 = userName;
console.log(dataNames);
