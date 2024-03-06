import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("pyramid-it").addEventListener('click', () => {
  //debugger;

  // read user text
  //const userInput = document.getElementById("to-pyramid").value;

  // create the pyramid
  /*const numRows = userInput.length 

  for (_; _; _) {
    for (_; _; _) {}
  }

  // display the pyramid
});*/
// read user text
debugger;
  const userInput = document.getElementById("to-pyramid").value;

  // create the pyramid
  const numRows = userInput.length;

  let pyramid = "";
  for (let i = numRows; i >= 1; i--) {
    // Add spaces for indentation
    pyramid += " ".repeat(numRows - i);
    // Add characters for the pyramid
    pyramid += userInput.slice(0, i) + "\n";
  }

  // display the pyramid
  display( "pyramided",pyramid);
});
