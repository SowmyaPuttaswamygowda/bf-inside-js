// #todo

'use strict';
debugger;
let userInput = '';
let isTooShort = true;

 /* -- BEGIN: validate input -- */
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');
  console.log('userInput:',typeof userInput,userInput);
 
  if(userInput === null || userInput === '') {
    alert('that is nothing');
    continue;
  }

  else(userInput.length <= 3) {
    alert('too short');
    continue;
  }

  isTooShort = false;
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
