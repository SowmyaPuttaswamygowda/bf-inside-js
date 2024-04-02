// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');

  /* -- BEGIN: validate input -- */
  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }
  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("words can't have white space");
    continue;
  }

  const confirmMessage =
    'do you want to filter this word?\n\n' + '- "' + userInput + '"';
  userConfirmed = confirm(confirmMessage);
}

  /* -- END: validate input -- */


const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);
const toRemove = removeVowels ? 'AEIOU' : 'BCDEFGHJKLMNPQRSTVWXYZ';

/*let filteredInput = '';
if (removeVowels) {
  toRemove = 'AEIOU';
} else {
  toRemove = 'BCDFGHJKLMNPQRSTVWXYZ';
}/*

let filteredInput = '';
/* -- BEGIN: filter input -- */
let filteredInput = '';
for (const character of userInput) {
  const upperCaseCharacter = character.toUpperCase();
  if (!toRemove.includes(upperCaseCharacter)) {
    filteredInput += character;
  }
}
/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
