'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `You, ${firstName}, are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Bob';
//       const str = `Oh, and you're a millenial, ${firstName}, ${age}`;

//       output = 'NEW OUTPUT!';
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // add(2, 3);
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Brandon';

// calcAge(1984);

// // Hoisting with variables....
// console.log(me);
// // console.log(job);
// // console.log(year);
// var me = 'Brandon';
// let job = 'teacher';
// const year = 1984;

// // Functions
// console.log(addDec(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// // Example 2
// var x = 1;
// let y = 2;
// const z = 3;

// // ------ THIS keyword ------
// // Method example
// const brandon = {
//   name: 'Brandon',
//   year: 1984,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// console.log(brandon.calcAge());

// console.log(this);

// const calcAge2 = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge2(1984);
// console.log('-------');

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1984);

// console.log('-------');

// const brandon2 = {
//   year: 1984,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// brandon2.calcAge();

// console.log('-------');

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = brandon2.calcAge;
// // The THIS keyword always points to the object that is calling the method

// // In this example Matilda is calling the method calcAge()
// matilda.calcAge();

// console.log('-------');
// console.log('-------');

// const brandon3 = {
//   firstName: 'Brandon',
//   year: 1984,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1984 && self.year <= 1996);
//     // };

//     // Solution 2
//     // the arrow function does not have a this keyword so it inherits its parents scope
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1984 && this.year <= 1996);
//     };
//     // const isMillenial = function () {
//     //   console.log(this.year >= 1984 && this.year <= 1996);
//     // };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// brandon3.greet();

// console.log('-------');
// console.log('-------');
// brandon3.calcAge();

// console.log('-------');
// console.log('-------');
// // Arguments keyword
// const addExpr2 = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr2(2, 5);
// addExpr2(2, 5, 8, 12);

// // var addArrow2 = (a, b) => {
// //   console.log(arguments);
// //   return a + b;
// // };
// // addArrow2(2, 5, 8);

// // console.log(addExpr2);
// console.log('-------');
// console.log('-------');

// let age = 39;
// let oldAge = age;
// age = 40;
// console.log(age);
// console.log(oldAge);

// const me2 = {
//   name: 'Brandon',
//   age: 39,
// };

// const friend = me2;

// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me2);

// console.log('-------');
// console.log('-------');

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName);
// console.log(oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

// ---------DESTRUCTURING ARRAYS----------------
// ---------DESTRUCTURING ARRAYS----------------
// ---------DESTRUCTURING ARRAYS----------------
// ---------DESTRUCTURING ARRAYS----------------

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// const [first1, , second1] = restaurant.categories;
// console.log(first1, second1);

// // Swithching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

// ---------OBJECT DESTRUCTURING----------------
// ---------OBJECT DESTRUCTURING----------------
// ---------OBJECT DESTRUCTURING----------------

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // By adding the = 1, = 0, ='12:30' --- I'm giving it a default value if there is not one inputed
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '12:30',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operartor (null or undefiend)
rest1.numGuests ??= 10; // This will return 0 since 0 is defined
rest2.numGuests ??= 10; // This will return 10 because numGuests is undefiend

//  AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // value of undefined because rest1.owner is falsey
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // value of 10 because rest2.owner is true so it moves to the second value which is anonymous

rest1.owner &&= '<ANONYMOUS>'; // value is 0
rest2.owner &&= '<ANONYMOUS>'; // value is anonymous

console.log(rest1);
console.log(rest2);

console.log('-------HERE I AM---------');

restaurant2.orderDelivery({
  time: '2:30',
  address: 'Rosemont High',
  mainIndex: 2,
  starterIndex: 2,
});

// This ex. has an address and starterIndex but no time or mainIndex so it defaults
restaurant2.orderDelivery({
  address: 'My house',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant2;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant2;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant2;

console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b, obj.c);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

// ----------- The Spread Operator ----------------
// * The spread operator does not change the original array
const arr = [7, 8, 9];
// don't do it this way, there is a better way 😀
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newArr2 = [...arr, 1, 2];
// gives me the array
console.log(newArr2);
// gives me the array written out
console.log(...newArr2);

// Adds another item to the mainMenu array
const newMenu = [...restaurant2.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant2.mainMenu];

// Join 2 arrays
const menu2 = [...restaurant2.starterMenu, ...restaurant2.mainMenu];
console.log(...menu2);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Brandon';
const str2 = 'Knight';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str, ' ', ...str2, ' 😀');

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];

console.log(ingredients);

restaurant2.orderPizza(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant2,
  founder: 'Guiseppe',
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant2 };
restaurantCopy.name = "Mama's House Cooking";
console.log('Restaurant Name:', restaurantCopy.name);
console.log('Restaurant Name:', restaurant2.name);

// SPREAD, because on RIGHT side of the = sign
const arr3 = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of the = sign
const [e, g, ...others] = [1, 2, 3, 4, 5];
console.log(e, g, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant2.mainMenu,
  ...restaurant2.starterMenu,
];

console.log(pizza, risotto, ...otherFood);

// Objects
const { sat, ...weekdays } = restaurant2.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant2.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

// ----------- Short Circuiting (&& and ||) ----------------

// ----------------   OR   ----------------
// Use ANY data type, return ANY data t ype, short-circuiting
console.log(3 || 'Brandon'); // 3 is truthy
console.log('' || 'Brandon'); // 'Brandon' is truthy
console.log(true || 0); // true because true is true
console.log(undefined || null); // null because undefined is falsy

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// undefiend, 0, '' are all falsy, the first truthy value is a string in this example it is 'Hello'

// Truthy and Falsey defined:
// Basically, if the variable value is false, zero, empty, null, undefined, or Nan , it's falsy and the code within the if block is not run. If the variable value is anything else, such as a number that is not zero, a non-empty string, an array, or an object, it's truthy and the code in the if block is run.

restaurant2.numGuests = 0;
const guest1 = restaurant2.numGuests ? restaurant2.numGuests : 10;
console.log(guest1);

const guest2 = restaurant2.numGuests || 10;
console.log(guest2);

console.log('-----   And   -----');
console.log(0 && 'Brandon');
console.log(7 && 'Brandon');

console.log('Hello' && 23 && null && 'Brandon'); // null

// AND will return the first value that is falsey or the last truthy value
// Everything has to be true so if the first value is false there is no point in moving forward so it displays that
// If everything is true it will display the last true value, so there...

// Practical Example...
if (restaurant2.orderPizza) {
  restaurant2.orderPizza('pineapple', 'spinach');
}

restaurant2.orderPizza && restaurant2.orderPizza('pineapple', 'spinach');

console.log('========');
console.log('-----   The Nullish Coalescing Operator   -----');
console.log('========');

restaurant2.numGuests = 0;
const guest3 = restaurant2.numGuests || 10;
console.log(guest3); // This returns 10 because restuarant2.numGuest = 0 and that is falsy and 10 is truthy

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant2.numGuests ?? 10;
console.log(guestCorrect); // This returns 0 because 0 is defined as 0 and not null/undefined

// In this example I do not have numGuest2 defined so it will return 12 because restaurant2.numGuests2 is undefined

const guestCorrect2 = restaurant2.numGuests2 ?? 12;
console.log(guestCorrect2);
