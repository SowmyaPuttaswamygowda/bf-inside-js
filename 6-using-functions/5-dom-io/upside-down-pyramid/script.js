import { readString, display } from '../../../lib/dom-io.js';

import {creatPyramid} from './utils/pyramid.js';

document.getElementById("pyramid-it").addEventListener('click', () => {
  debugger;
  //get user input
  const text = readString('to-pyramid');
  const pyramid = creatPyramid(text);

  display('pyramided',pyramid);
});
