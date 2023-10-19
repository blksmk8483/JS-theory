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
