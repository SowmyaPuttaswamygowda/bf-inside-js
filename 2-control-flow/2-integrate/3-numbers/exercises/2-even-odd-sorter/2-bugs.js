// #todo

'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/
debugger;
let userNumber = NaN;
let userNumberIsNaN = true;
while (userNumberIsNaN) {
  const userInput = prompt('enter a number');
  console.log('userInput', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('enter something!');
    continue;
  }

  userNumber =Number(userInput);
  console.log('userNumber:',typeof userNumber,userNumber);

  if (Number.isNaN(userNumber)) {
    alert('"'+ userInput + '" is not a number');
  } else{
    userNumberIsNaN = false;
  }
}

if (userNumber % 2 === 0) {
  const evenMessage = userNumber + ' is even';
  alert(evenMessage);
} else {
  const oddMessage = userNumber + 'is odd';
  alert(oddMessage);
}
