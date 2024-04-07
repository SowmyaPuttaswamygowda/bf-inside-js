/**
 * /**
 * finds all strings in an array that include the search query
 *
 * @param {string[]} [arr=[]] - the array to search
 * @param {string} [query =''] - the query to search for
 * @returns {string[]} filtered array with string inculdes query only
 */
export const search = (arr = [], query = '') => {
  const filteredArr = [];
  for (const str of arr) {
    if (str.includes(query)) {
      filteredArr.push(str);
    }
  }

  return filteredArr;
};
 