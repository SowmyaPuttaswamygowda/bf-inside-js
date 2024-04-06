// #todo
import { fileToVariable}from './file-to-variable.js';

describe('it should turn a file name to a variable', () => {
  describe('when no argument is passed,' () =>{
    it('default parameter is an empty string', () => {
      expect(fileToVariable()).toEqual('');

  });
});
 describe('when argument is a file name ', () => {
    it('"test-one.js" should return "testOne"', () => {
      expect(fileToVariable('test-one.js')).toEqual('testOne');
    });
    it('"util-functions.js" should return "utilFunctions"', () => {
      expect(fileToVariable('util-functions.js')).toEqual('utilFunctions');
    });
  });
});
