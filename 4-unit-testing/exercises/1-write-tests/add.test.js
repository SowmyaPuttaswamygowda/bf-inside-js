// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const sum = (x =0, y = 0) => {
  return x + y;
};


 describe('adds two numbers', () => {
  describe('both numbers are positive', () => {
    it('not passing any argument should return 0', () => {
      const expected = 0;
      const actual = sum();
      expect(actual).toEqual(expected);
    });
  

    it('passing positive numbers should return their sum', () =>{
    // Test case: Passing positive numbers should return their
    const expected = 10;
    const actual = sum(5,5);
    expect(actual).toEqual(expected);
    });
  });
  

  describe('one or both numbers are negative', () => {
    it('Passing one negative and one pasitive number should  return their sum', () => {
      const expected = 3;
      const actual = sum(-5,8);
      expect(actual).toEqual(expected);

    });

    it('passing two negative numbers should return their sum',() => {
     // Test case: Passing two negative numbers should return their sum. 
     const expected = -10;
     const actual = sum(-5, -5);
     expect(actual).toEqual(expected);

    });
    
  });
  
  });
