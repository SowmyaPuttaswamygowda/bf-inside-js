import { readNumber, readString, display } from '../../../lib/dom-io.js';

import {skipCharacters} from './utils/skip.js';

document.getElementById("skip-them").addEventListener('click', () => {
  debugger;

  const text = readString('user-text');
  const skipSize = readNumber('skip-size');
  const finalText = skipCharacters(text,skipSize);

  display('skipped-output' , finalText);
});
