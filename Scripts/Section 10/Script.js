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

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Brandon', 'Martha', 'Adam'].forEach(high5);
