import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values
  const userInput =document.getElementById('user-text').value;

  // repeat the characters in the text
  let repeatedText = '';
  for (let i = 0; i < userInput.length; i++) {
    for (let j = 0; j < 2; j++) {
      repeatedText += userInput[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', repeatedText);
});
