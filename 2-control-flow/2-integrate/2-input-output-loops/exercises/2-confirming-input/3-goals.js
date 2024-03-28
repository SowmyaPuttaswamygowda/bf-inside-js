// #todo

'use strict';
debugger;
let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  /* -- END: validate input -- */
  userInput = prompt("Please enter your name");

  // Validate input
  if(userInput !== null && userInput.trim() !== '') {
    isValidName = true;
  } else {
    alert("Invalid name. Please try again.");
  }
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
