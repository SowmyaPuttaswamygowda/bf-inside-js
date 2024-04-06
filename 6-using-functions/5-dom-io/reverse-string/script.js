import { readString, display } from '../../../lib/dom-io.js';

import {reverstring} from './utils/reverse-string.js';

document.getElementById("reverse-it").addEventListener('click', () => {
  debugger;
  const text = readString('user-text');
  const finalText = reverstring(text);
  display('reversed-output', finalText);
});
