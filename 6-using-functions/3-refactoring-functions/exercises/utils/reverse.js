/**
 *reverse a string
 * @param {string} text- the text to reverse
 * @returns {string} the reversed string
 */
export const reverse = (text = '') => {
  return text.split('').reverse().join('');
};
