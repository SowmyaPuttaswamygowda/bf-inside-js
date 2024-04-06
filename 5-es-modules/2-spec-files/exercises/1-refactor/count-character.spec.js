// #todo
export const countCharacter = (text = '', toCount = '') => {
  if (toCount.length !== 1) {
    return -1;
  }
  let count = 0;
  for (let character of text) {
    if (character === toCount) {
      count++;
    }
  }
  return count;
};
