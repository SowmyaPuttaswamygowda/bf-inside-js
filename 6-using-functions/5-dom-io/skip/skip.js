const skipCharacters = (text, skipSize) => {
  let newText = '';

  for (let i = 0; i < text.length; i = i + skipSize) {
    newText += text[i];
  }

  return newText;
};

export default skipCharacters;
