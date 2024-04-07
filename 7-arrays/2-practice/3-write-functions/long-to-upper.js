// #todo

/**
 *@param {string[]} [arr=[]] - the array to check if it's items are long or not
 *@param {number} [long=0] - the value to decide if a string is long or not
 *@returns {string[]} - array of strings only long string uppercase
 */
export const longToUpper = (arr = [],long = 0) => {
  const newArr = [];
  for (const str of arr) {
    if(str.length >= long) {
      newArr.push(str.toUpperCase());
    }else {
      newArr.push(str);
    }
  }
  return newArr;
};
