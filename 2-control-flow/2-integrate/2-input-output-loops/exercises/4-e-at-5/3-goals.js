// #todo

'use strict';
debugger;
let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    console.log('that is not something');
    continue;
  }

  if (userInput.length < 5) {
    console.log('it is short');
    continue;
  }
  
  if(userInput[4]==='e' || userInput[4]==='E') {
    validInput = userInput
    break;
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
