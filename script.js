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

// ------ THIS keyword ------
// Method example
const brandon = {
  name: 'Brandon',
  year: 1984,
  calcAge: function () {
    return 2037 - this.year;
  },
};

console.log(brandon.calcAge());

console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge2(1984);
console.log('-------');

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1984);

console.log('-------');

const brandon2 = {
  year: 1984,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

brandon2.calcAge();

console.log('-------');

const matilda = {
  year: 2017,
};

matilda.calcAge = brandon2.calcAge;
// The THIS keyword always points to the object that is calling the method

// In this example Matilda is calling the method calcAge()
matilda.calcAge();

console.log('-------');
console.log('-------');

const brandon3 = {
  firstName: 'Brandon',
  year: 1984,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1984 && self.year <= 1996);
    // };

    // Solution 2
    // the arrow function does not have a this keyword so it inherits its parents scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1984 && this.year <= 1996);
    };
    // const isMillenial = function () {
    //   console.log(this.year >= 1984 && this.year <= 1996);
    // };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

brandon3.greet();

console.log('-------');
console.log('-------');
brandon3.calcAge();

console.log('-------');
console.log('-------');
// Arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

// var addArrow2 = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow2(2, 5, 8);

// console.log(addExpr2);
console.log('-------');
console.log('-------');

let age = 39;
let oldAge = age;
age = 40;
console.log(age);
console.log(oldAge);

const me2 = {
  name: 'Brandon',
  age: 39,
};

const friend = me2;

friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me2);

console.log('-------');
console.log('-------');

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
