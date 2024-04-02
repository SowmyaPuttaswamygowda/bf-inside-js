// #todo

'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  /* -- BEGIN: validate input -- */
  if(userInput === null || userInput === '') {
    alert('that is nothing');
    continue;
  }
  //make sure it is long enough to have an "e" in the 12th letter
  if (userInput.length < 12) {
    alert('too short');
    break;
  }
  alert(`input has no "e" or "E" as the ${index}th character`);
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
