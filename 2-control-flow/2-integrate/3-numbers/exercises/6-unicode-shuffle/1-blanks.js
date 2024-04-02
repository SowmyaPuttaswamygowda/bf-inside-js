// #todo

'use strict';

let userInput = '';
let unicodeShift = NaN;

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  while (true) {
    const unicodeShiftInput = prompt(
      'how many unicode numbers do you want the characters to shift?',
    );

    if (unicodeShiftInput === null || unicodeShiftInput === '') {
      alert('enter something');
      continue;
    }

    unicodeShift = Number(unicodeShiftInput);
    console.log('unicodeshift:', typeof unicodeShift, unicodeShift);

    if (Number.isNaN(unicodeShift)) {
      alert('"' + unicodeShiftInput + '" is not a number');
    } else {
      break;
    }
  }
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift;
  userConfirmed = confirm(confirmMessage);
}

let encodedString = '';

for (const character of userInput) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + unicodeShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}

console.log('encodedString:', typeof encodedString, encodedString);

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
