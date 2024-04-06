const repeatcharacters = (text = '',repeatations = 1) => {
  let newText = '';
  
  for(const char of text) {
    newText += char.repeat(repeatations);
  }

  return newText;
};
export default repeatcharacters;
