import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values
  /*const text =readString('Enter a text to repeat:');
  const repeatCount = readNumber('Enter the number of times to repeat:',0)

  // repeat the characters in the text
let repeatedText = '';
  for (let i = 0;i < text.length; i++) {
    for (let j=0; j < repeatCount; j++) {
      repeatedText += text[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', repeatedText);
});*/

// read user values
  const phrase = readString('user-text');
  const repetation = readNumber('number-of-times');

  // repeat the characters in the text

  let repeatedPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < repetation; j++) {
      repeatedPhrase += phrase[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', repeatedPhrase);
});
