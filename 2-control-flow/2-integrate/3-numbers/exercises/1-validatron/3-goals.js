// #todo

'use strict';

const userString = prompt('enter a number:');
//corect it to a number
const userNumber = Number(userString);

//is the number Nan or not?
//this is there because we want the opposite of number.isnan
const inputIsANumber = !Number .isNaN(userNumber)

/* -- BEGIN: check if input is a number -- */
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
