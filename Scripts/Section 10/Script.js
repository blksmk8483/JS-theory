'use strict';

const bookings = [];

let usCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

let showMeTheMoney = usCurrency.format;

// Its is better to give the function variable default values instead
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = showMeTheMoney(199 * numPassengers)
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH444', 2, showMeTheMoney(800));
createBooking('LH444', 2);
createBooking('LH444', 5);

createBooking('LH444', undefined, showMeTheMoney(2));

// ======================================================
// ======================================================
// ======================================================
// ======================================================
console.log('==========================================');
console.log('==========================================');
console.log('==========================================');
console.log('HOW PASSING ARGUMENTS WORKS: VALUE vs. REFERENCE');

const flight = 'LH234';
const brandon = {
  name: 'Brandon Knight',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = 'Mr. ' + passenger.name;

  // if (passenger.passport === 123456789) {
  //   alert('Checked in!');
  // } else {
  //   alert('Wrong passport!');
  // }
};

// checkIn(flight, brandon);
// console.log(flight); // LH234
// console.log(brandon); // name: Mr. Brandon Knight, passport: 123456789

// flight stays the same because...it is the same as this
// const flightNum = flight

// brandon changes because...it is the same as this
// const passenger = brandon

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(brandon);
checkIn(flight, brandon);

// ======================================================
// ======================================================
// ======================================================
// ======================================================
console.log('==========================================');
console.log('==========================================');
console.log('==========================================');
console.log('FUNCTIONS ACCEPTING CALLBACK FUNCTIONS');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Brandon', 'Martha', 'Adam'].forEach(high5);

// ======================================================
// ======================================================
// ======================================================
// ======================================================
console.log('==========================================');
console.log('==========================================');
console.log('==========================================');
console.log('FUNCTIONS RETURNING FUNCTIONS');

// #1 this is longhand but easier to read
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Brandon');
greeterHey('Bob');

greet('Hello')('Brandon');

// #2 this is with arrow functions but still witht the return written out
const greet2 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

greet2('HI')('Brandon');

// #3 this is with arrow function but completely dry, in my opinion this is harder to read but...maybe this would be a refactor
const greet3 = greeting => name => console.log(`${greeting} ${name}`);

greet3('How ya doing')('Brandon');

// ======================================================
// ======================================================
// ======================================================
// ======================================================
console.log('==========================================');
console.log('==========================================');
console.log('==========================================');
console.log('THE CALL AND APPLY METHOD');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Brandon Knight');
lufthansa.book(447, 'Chuck Norris');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Knight'); // Does not work

// -----------
// Call Method

// the call method allows me to point to where I want the this keyword to pull from....I am setting the this keyword

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 867, 'Wolverine');

// -----------
// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// easier method is to use the spread operator to spread out the information

book.call(swiss, ...flightData);

// ======================================================
// ======================================================
// ======================================================
// ======================================================
console.log('==========================================');
console.log('==========================================');
console.log('==========================================');
console.log('THE BIND METHOD');

// const book = lufthansa.book;
// Just a reminder that I am calling this, that is where book comes from

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 234);
bookEW23('Brandon Knight');
bookEW23('Sarah Knight');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

// challenge same as (partial app) above 👆 but written a different way
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
