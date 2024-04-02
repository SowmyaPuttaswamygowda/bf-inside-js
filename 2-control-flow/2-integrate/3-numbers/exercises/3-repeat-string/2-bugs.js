// #todo

'use strict';

/* look out for:

  - variable declarations
  - missing condition in while loop
  - off-by-one in for loop
  - missing string concatenation

*/

let userInput = '';
let repetitions = NaN;
while (true) {
  /* gather a string from the user */
  userInput = prompt('enter a phrase to repeat:');
  console.log('userInput:', typeof userInput, userInput);


  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('how many times do you want to repeat it?');
  console.log('repeatitionsInput:', typeof repetitionsInput,repetitionsInput);
  repetitions = Number(repetitionsInput);
  console.log('repetitions:', typeof repetitions,repetitions);

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);
  if (confirmation){
    break;
  }
}

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}
console.log('repeatedInput:', typeof repeatedInput, repeatedInput);

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
