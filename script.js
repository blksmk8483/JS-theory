'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You, ${firstName}, are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Bob';
      const str = `Oh, and you're a millenial, ${firstName}, ${age}`;

      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Brandon';

calcAge(1984);
