import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  debugger;

  // read user values
   const userInput = readString("user-text");
   const numberOFTimes = readNumber("number-of-times");

  // repeat the string
  let repeatedString = "";
  for (let i = 0; i < numberOFTimes; i++) {
    repeatedString += userInput;
  }

  // display the repeated string
  display("repeated-output",repeatedString);
});
