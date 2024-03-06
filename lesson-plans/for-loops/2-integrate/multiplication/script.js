import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById("do-math").addEventListener('click', () => {
  debugger;

  // read user values
  const leftNumber = readNumber("left");
  const rightNumber = readNumber("right");

  //calculate the result
  const result = leftNumber * rightNumber;
  

  // display the product
  display("product",result);

});
