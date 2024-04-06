/**
 * remove characters from a string
 * @param {string} toFilter- the text to remoove from
 * @param {string} remooveTese - the characters to remove
 * @param {string} the filtered string
 *
 */
export const filter = (toFilter, removeThese) => {
  if (!removeThese) {
    return toFilter;
  }
  let filteredString = '';
  for (const char of toFilter) {
    if(removeThese.toLowerCase().indexof(char.toLowerCase()) === -1) {
      filteredString += char;
    }
  }
  return filteredString;
};
