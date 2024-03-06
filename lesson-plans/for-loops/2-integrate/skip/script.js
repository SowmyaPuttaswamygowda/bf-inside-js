import { readNumber, readString, display } from '../../../../lib/dom-io.js';
debugger;
document.getElementById("skip-them").addEventListener('click', () => {
  

  // read user values
  const size = readNumber("skip-size");
  const text = readString("user-text");

  // create a new string with skipped characters
  let newString = '';
  for (let i = 0; i < text.length;i = i + size) {
    newString += text[i];
  }
  // display the skipped string
  display("skipped-output",newString);
});
