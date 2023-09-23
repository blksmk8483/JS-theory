'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You, ${firstName}, are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Bob';
      const str = `Oh, and you're a millenial, ${firstName}, ${age}`;

      output = 'NEW OUTPUT!';
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // add(2, 3);
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Brandon';

calcAge(1984);

// Hoisting with variables....
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Brandon';
let job = 'teacher';
const year = 1984;

// Functions
console.log(addDec(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Example 2
var x = 1;
let y = 2;
const z = 3;
