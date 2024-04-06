const creatPyramid = (text) => {
  let pyramid = '';

  for (let i = 0; i < text.length; i++) {
    let row = text.slice(i) + '\n';
    pyramid += row;
  }
  return pyramid;
};
 export default creatPyramid;
