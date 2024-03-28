// #todo

'use strict';

let userInput = '';
let inputIsAboutFrogs = false;
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');
  console.log('userInput:',typeof userInput,userInput);

  /* -- BEGIN: validate input -- */
  //check if the user entered nothing,or clicked cancel
  if(userInput === '' || userInput === null) {
    alert('that is not somthing');
    continue;
  }
  
  //search the user input for "frog",upper or lower case
  if (userInput.toLowerCase().includes('frogs')){
    inputIsAboutFrogs = true;
    continue;
  }

  alert('nope, not about frogs. try again.');

  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
