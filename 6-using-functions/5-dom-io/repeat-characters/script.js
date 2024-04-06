import { readNumber, readString, display } from '../../../lib/dom-io.js';

import {repeatcharacters} from './utils/repeat-char.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  //debugger;
  //get input from the user
  const text = readString('user-text');
  const repeatations = readnumber('number of times');

  const finalText = repeatcharacters(text, repeatations);

  display('repeated-output', finalText);

});
