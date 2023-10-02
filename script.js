// 'use strict';

// // // function calcAge(birthYear) {
// // //   const age = 2037 - birthYear;

// // //   function printAge() {
// // //     let output = `You, ${firstName}, are ${age}, born in ${birthYear}`;
// // //     console.log(output);

// // //     if (birthYear >= 1981 && birthYear <= 1996) {
// // //       var millenial = true;
// // //       const firstName = 'Bob';
// // //       const str = `Oh, and you're a millenial, ${firstName}, ${age}`;

// // //       output = 'NEW OUTPUT!';
// // //       console.log(str);

// // //       function add(a, b) {
// // //         return a + b;
// // //       }
// // //     }
// // //     // add(2, 3);
// // //     console.log(millenial);
// // //     console.log(output);
// // //   }
// // //   printAge();
// // //   return age;
// // // }

// // // const firstName = 'Brandon';

// // // calcAge(1984);

// // // // Hoisting with variables....
// // // console.log(me);
// // // // console.log(job);
// // // // console.log(year);
// // // var me = 'Brandon';
// // // let job = 'teacher';
// // // const year = 1984;

// // // // Functions
// // // console.log(addDec(2, 3));
// // // // console.log(addExpr(2, 3));
// // // // console.log(addArrow(2, 3));

// // // function addDec(a, b) {
// // //   return a + b;
// // // }

// // // const addExpr = function (a, b) {
// // //   return a + b;
// // // };

// // // const addArrow = (a, b) => a + b;

// // // // Example
// // // if (!numProducts) deleteShoppingCart();

// // // var numProducts = 10;

// // // function deleteShoppingCart() {
// // //   console.log('All products deleted!');
// // // }

// // // // Example 2
// // // var x = 1;
// // // let y = 2;
// // // const z = 3;

// // // // ------ THIS keyword ------
// // // // Method example
// // // const brandon = {
// // //   name: 'Brandon',
// // //   year: 1984,
// // //   calcAge: function () {
// // //     return 2037 - this.year;
// // //   },
// // // };

// // // console.log(brandon.calcAge());

// // // console.log(this);

// // // const calcAge2 = function (birthYear) {
// // //   console.log(2037 - birthYear);
// // //   console.log(this);
// // // };

// // // calcAge2(1984);
// // // console.log('-------');

// // // const calcAgeArrow = birthYear => {
// // //   console.log(2037 - birthYear);
// // //   console.log(this);
// // // };

// // // calcAgeArrow(1984);

// // // console.log('-------');

// // // const brandon2 = {
// // //   year: 1984,
// // //   calcAge: function () {
// // //     console.log(this);
// // //     console.log(2037 - this.year);
// // //   },
// // // };

// // // brandon2.calcAge();

// // // console.log('-------');

// // // const matilda = {
// // //   year: 2017,
// // // };

// // // matilda.calcAge = brandon2.calcAge;
// // // // The THIS keyword always points to the object that is calling the method

// // // // In this example Matilda is calling the method calcAge()
// // // matilda.calcAge();

// // // console.log('-------');
// // // console.log('-------');

// // // const brandon3 = {
// // //   firstName: 'Brandon',
// // //   year: 1984,
// // //   calcAge: function () {
// // //     console.log(this);
// // //     console.log(2037 - this.year);

// // //     // Solution 1
// // //     // const self = this;
// // //     // const isMillenial = function () {
// // //     //   console.log(self);
// // //     //   console.log(self.year >= 1984 && self.year <= 1996);
// // //     // };

// // //     // Solution 2
// // //     // the arrow function does not have a this keyword so it inherits its parents scope
// // //     const isMillenial = () => {
// // //       console.log(this);
// // //       console.log(this.year >= 1984 && this.year <= 1996);
// // //     };
// // //     // const isMillenial = function () {
// // //     //   console.log(this.year >= 1984 && this.year <= 1996);
// // //     // };
// // //     isMillenial();
// // //   },

// // //   greet: () => console.log(`Hey ${this.firstName}`),
// // // };

// // // brandon3.greet();

// // // console.log('-------');
// // // console.log('-------');
// // // brandon3.calcAge();

// // // console.log('-------');
// // // console.log('-------');
// // // // Arguments keyword
// // // const addExpr2 = function (a, b) {
// // //   console.log(arguments);
// // //   return a + b;
// // // };
// // // addExpr2(2, 5);
// // // addExpr2(2, 5, 8, 12);

// // // // var addArrow2 = (a, b) => {
// // // //   console.log(arguments);
// // // //   return a + b;
// // // // };
// // // // addArrow2(2, 5, 8);

// // // // console.log(addExpr2);
// // // console.log('-------');
// // // console.log('-------');

// // // let age = 39;
// // // let oldAge = age;
// // // age = 40;
// // // console.log(age);
// // // console.log(oldAge);

// // // const me2 = {
// // //   name: 'Brandon',
// // //   age: 39,
// // // };

// // // const friend = me2;

// // // friend.age = 27;

// // // console.log('Friend:', friend);
// // // console.log('Me:', me2);

// // // console.log('-------');
// // // console.log('-------');

// // // // Primitive types
// // // let lastName = 'Williams';
// // // let oldLastName = lastName;
// // // lastName = 'Davis';
// // // console.log(lastName);
// // // console.log(oldLastName);

// // // // Reference types
// // // const jessica = {
// // //   firstName: 'Jessica',
// // //   lastName: 'Williams',
// // //   age: 27,
// // // };

// // // const marriedJessica = jessica;
// // // marriedJessica.lastName = 'Davis';
// // // console.log('Before marriage:', jessica);
// // // console.log('After marriage:', marriedJessica);

// // // // Copying objects
// // // const jessica2 = {
// // //   firstName: 'Jessica',
// // //   lastName: 'Williams',
// // //   age: 27,
// // //   family: ['Alice', 'Bob'],
// // // };

// // // const jessicaCopy = Object.assign({}, jessica2);
// // // jessicaCopy.lastName = 'Davis';
// // // console.log('Before marriage:', jessica2);
// // // console.log('After marriage:', jessicaCopy);

// // // jessicaCopy.family.push('Mary');
// // // jessicaCopy.family.push('John');

// // // console.log('Before marriage:', jessica2);
// // // console.log('After marriage:', jessicaCopy);

// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------

// // // ---------DESTRUCTURING ARRAYS----------------
// // // ---------DESTRUCTURING ARRAYS----------------
// // // ---------DESTRUCTURING ARRAYS----------------
// // // ---------DESTRUCTURING ARRAYS----------------

// // // Data needed for a later exercise
// // // const flights =
// // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// // // const restaurant = {
// // //   name: 'Classico Italiano',
// // //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// // //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// // //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// // //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// // //
// // //   openingHours: {
// // //     thu: {
// // //       open: 12,
// // //       close: 22,
// // //     },
// // //     fri: {
// // //       open: 11,
// // //       close: 23,
// // //     },
// // //     sat: {
// // //       open: 0, // Open 24 hours
// // //       close: 24,
// // //     },
// // //   },
// // // };

// // // const arr = [2, 3, 4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // const [x, y, z] = arr;
// // // console.log(x, y, z);
// // // console.log(arr);

// // // let [main, secondary] = restaurant.categories;
// // // console.log(main, secondary);
// // // const [first1, , second1] = restaurant.categories;
// // // console.log(first1, second1);

// // // // Swithching variables
// // // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);

// // // // Recieve 2 return values from a function
// // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, mainCourse);

// // // // Nested destructuring
// // // const nested = [2, 4, [5, 6]];
// // // // const [i, , j] = nested;
// // // // console.log(i, j);
// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// // // // Default values
// // // const [p = 1, q = 1, r = 1] = [8, 9];
// // // console.log(p, q, r);

// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------

// // // ---------OBJECT DESTRUCTURING----------------
// // // ---------OBJECT DESTRUCTURING----------------
// // // ---------OBJECT DESTRUCTURING----------------

// const restaurant2 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
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
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // By adding the = 1, = 0, ='12:30' --- I'm giving it a default value if there is not one inputed
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '12:30',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // const rest1 = {
// //   name: 'Capri',
// //   // numGuests: 20,
// //   numGuests: 0,
// // };
// // const rest2 = {
// //   name: 'La Piazza',
// //   owner: 'Giovanni Rossi',
// // };

// // // OR assignment Operator
// // // rest1.numGuests = rest1.numGuests || 10;
// // // rest2.numGuests = rest2.numGuests || 10;
// // // rest1.numGuests ||= 10;
// // // rest2.numGuests ||= 10;

// // // nullish assignment operartor (null or undefiend)
// // rest1.numGuests ??= 10; // This will return 0 since 0 is defined
// // rest2.numGuests ??= 10; // This will return 10 because numGuests is undefiend

// // //  AND assignment operator
// // // rest1.owner = rest1.owner && '<ANONYMOUS>'; // value of undefined because rest1.owner is falsey
// // // rest2.owner = rest2.owner && '<ANONYMOUS>'; // value of 10 because rest2.owner is true so it moves to the second value which is anonymous

// // rest1.owner &&= '<ANONYMOUS>'; // value is 0
// // rest2.owner &&= '<ANONYMOUS>'; // value is anonymous

// // console.log(rest1);
// // console.log(rest2);

// // console.log('-------HERE I AM---------');

// // restaurant2.orderDelivery({
// //   time: '2:30',
// //   address: 'Rosemont High',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // // This ex. has an address and starterIndex but no time or mainIndex so it defaults
// // restaurant2.orderDelivery({
// //   address: 'My house',
// //   starterIndex: 2,
// // });

// // const { name, openingHours, categories } = restaurant2;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant2;

// // console.log(restaurantName, hours, tags);

// // const { menu = [], starterMenu: starters = [] } = restaurant2;

// // console.log(menu, starters);

// // // Mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b, obj.c);

// // const {
// //   fri: { open, close },
// // } = openingHours;
// // console.log(open, close);

// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------

// // // ----------- The Spread Operator ----------------
// // // * The spread operator does not change the original array
// // const arr = [7, 8, 9];
// // // don't do it this way, there is a better way 😀
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // const newArr2 = [...arr, 1, 2];
// // // gives me the array
// // console.log(newArr2);
// // // gives me the array written out
// // console.log(...newArr2);

// // // Adds another item to the mainMenu array
// // const newMenu = [...restaurant2.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // // Copy array
// // const mainMenuCopy = [...restaurant2.mainMenu];

// // // Join 2 arrays
// // const menu2 = [...restaurant2.starterMenu, ...restaurant2.mainMenu];
// // console.log(...menu2);

// // // Iterables: arrays, strings, maps, sets. NOT objects
// // const str = 'Brandon';
// // const str2 = 'Knight';
// // const letters = [...str, ' ', 's.'];
// // console.log(letters);
// // console.log(...str, ' ', ...str2, ' 😀');

// // const ingredients = [
// //   // prompt("Let's make pasta! Ingredient 1?"),
// //   // prompt('Ingredient 2?'),
// //   // prompt('Ingredient 3'),
// // ];

// // console.log(ingredients);

// // restaurant2.orderPizza(...ingredients);

// // // Objects
// // const newRestaurant = {
// //   foundedIn: 1998,
// //   ...restaurant2,
// //   founder: 'Guiseppe',
// // };

// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant2 };
// // restaurantCopy.name = "Mama's House Cooking";
// // console.log('Restaurant Name:', restaurantCopy.name);
// // console.log('Restaurant Name:', restaurant2.name);

// // // SPREAD, because on RIGHT side of the = sign
// // const arr3 = [1, 2, ...[3, 4]];

// // // REST, because on the LEFT side of the = sign
// // const [e, g, ...others] = [1, 2, 3, 4, 5];
// // console.log(e, g, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant2.mainMenu,
// //   ...restaurant2.starterMenu,
// // ];

// // console.log(pizza, risotto, ...otherFood);

// // // Objects
// // const { sat, ...weekdays } = restaurant2.openingHours;
// // console.log(weekdays);

// // // 2) Functions
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };
// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(8, 2, 5, 3, 2, 1, 4);

// // const x = [23, 5, 7];
// // add(...x);

// // restaurant2.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------
// // // --------------------------------------------------

// // // ----------- Short Circuiting (&& and ||) ----------------

// // // ----------------   OR   ----------------
// // // Use ANY data type, return ANY data t ype, short-circuiting
// // console.log(3 || 'Brandon'); // 3 is truthy
// // console.log('' || 'Brandon'); // 'Brandon' is truthy
// // console.log(true || 0); // true because true is true
// // console.log(undefined || null); // null because undefined is falsy

// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // // undefiend, 0, '' are all falsy, the first truthy value is a string in this example it is 'Hello'

// // // Truthy and Falsey defined:
// // // Basically, if the variable value is false, zero, empty, null, undefined, or Nan , it's falsy and the code within the if block is not run. If the variable value is anything else, such as a number that is not zero, a non-empty string, an array, or an object, it's truthy and the code in the if block is run.

// // restaurant2.numGuests = 0;
// // const guest1 = restaurant2.numGuests ? restaurant2.numGuests : 10;
// // console.log(guest1);

// // const guest2 = restaurant2.numGuests || 10;
// // console.log(guest2);

// // console.log('-----   And   -----');
// // console.log(0 && 'Brandon');
// // console.log(7 && 'Brandon');

// // console.log('Hello' && 23 && null && 'Brandon'); // null

// // // AND will return the first value that is falsey or the last truthy value
// // // Everything has to be true so if the first value is false there is no point in moving forward so it displays that
// // // If everything is true it will display the last true value, so there...

// // // Practical Example...
// // if (restaurant2.orderPizza) {
// //   restaurant2.orderPizza('pineapple', 'spinach');
// // }

// // restaurant2.orderPizza && restaurant2.orderPizza('pineapple', 'spinach');

// // console.log('========');
// // console.log('-----   The Nullish Coalescing Operator   -----');
// // console.log('========');

// // restaurant2.numGuests = 0;
// // const guest3 = restaurant2.numGuests || 10;
// // console.log(guest3); // This returns 10 because restuarant2.numGuest = 0 and that is falsy and 10 is truthy

// // // Nullish: null and undefined (NOT 0 or '')
// // const guestCorrect = restaurant2.numGuests ?? 10;
// // console.log(guestCorrect); // This returns 0 because 0 is defined as 0 and not null/undefined

// // // In this example I do not have numGuest2 defined so it will return 12 because restaurant2.numGuests2 is undefined

// // const guestCorrect2 = restaurant2.numGuests2 ?? 12;
// // console.log(guestCorrect2);

// // Coding Challenge #1
// const game = {
//   team1: 'Bayeryn Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     ['Neuer', 'Pavard', 'Martinex', 'asdfdf', 'asdasdf', 'poiuyt'],
//     ['me', 'you', 'him', 'her', 'them'],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Leviing', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// const [players1, players2] = game.players;

// console.log(...players1);
// console.log(...players2);

// // 2
// // const gk = game.team1;
// // const fieldPlayers = game.players[0];
// // console.log(gk);
// // console.log(...fieldPlayers);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(...allPlayers);

// // 4
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(...playersFinal);

// // 5
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...players) {
//   console.log(`${players.length} number of goals`);
// };
// printGoals('yourMom', 'bob', 'larry');
// printGoals('hisMom', 'bob', 'larry', 'jerry');
// printGoals(...game.scored);
// // 7
// (team1 >= team2 && console.log('Team 1 is the winner')) ||
//   (team1 <= team2 && console.log('Team 2 is the winner'));

// const menu = [...restaurant2.starterMenu, ...restaurant2.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// console.log('-----  deconstructing the loop  -----');
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhancved object literals

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // By adding the = 1, = 0, ='12:30' --- I'm giving it a default value if there is not one inputed
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '12:30', address }) {
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

if (restaurant2.openingHours && restaurant2.openingHours.mon)
  console.log(restaurant2.openingHours.mon.open);

// console.log(restaurant2.openingHours.mon.open); // this gets me an error

// with optional chaining
console.log(restaurant2.openingHours.mon?.open); // This is undefined... What this does it looks at whats before the ? and if its there it moves on if not then it is undefined
console.log(restaurant2.openingHours?.mon?.open);
// This looks to see if openingHours exsist and then mon, and then open

const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant2.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log(restaurant2.order?.(2, 2) ?? 'Method does not exist');
console.log(restaurant2.orderRisotto?.(2, 2) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Brandon', email: 'email@email.com' }];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');

// --------   Looping Objects   --------

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
console.log('------------------------------');
console.log('------------------------------');
console.log('-----Coding Challenge #2-----');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;

console.log(...players1);
console.log(...players2);

// 2
// const gk = game.team1;
// const fieldPlayers = game.players[0];
// console.log(gk);
// console.log(...fieldPlayers);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(...allPlayers);

// 4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(...playersFinal);

// 5
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(`${players.length} number of goals`);
};
printGoals('yourMom', 'bob', 'larry');
printGoals('hisMom', 'bob', 'larry', 'jerry');
printGoals(...game.scored);
// 7
(team1 >= team2 && console.log('Team 1 is the winner')) ||
  (team1 <= team2 && console.log('Team 2 is the winner'));

// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way,exactly like this:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }
// GOOD LUCK 😀

// 1
// Using [].entries gives me the index of the array and the value
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2

// let numbers = [game.odds];
// numbers.forEach(function (element, index, array) {
//   console.log(element);
// });

// function average(array) {
//   sum = 0;
//   array.forEach(element => {
//     sum += element;
//   });
//   return sum / array / length;
// }

// console.log(average([game.odds]));
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
