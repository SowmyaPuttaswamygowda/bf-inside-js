import { readNumber, display } from '../../../lib/dom-io.js';

import { multiply } from './utils/multiply.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;
  const left = readNumber('left');
  const right = readNumber('right');

  const result = multiply(left,right);
  display(product, result)

});
