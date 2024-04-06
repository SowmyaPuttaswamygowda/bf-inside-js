/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [str=''] - A string to repeat each character.
 * @param {number} [repeatation = 1] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (str = '', repeatations =1) => {
  let newStar = '';
  for (const char of str) {
    newStar += char.repeat(repeatations);
  }

  return newStar;
};
