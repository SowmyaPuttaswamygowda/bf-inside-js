// #todo

import { someLong } from './some-long.js';

import { someLong } from './some-long.js';

describe('filter array of strings and keep only the long string', () => {
  describe('filter strings', () => {
    it('array with only long strings', () => {
      const actual = someLong(['fruits', 'banana', 'orange'], 3);
      const expected = true;

      expect(actual).toEqual(expected);
    });
    it('array with only short strings', () => {
      const actual = someLong(['a', 'b', 'c'], 4);
      const expected = false;

      expect(actual).toEqual(expected);
    });
    it('array with mixed string', () => {
      const actual = someLong(['dog', 'cat', 'horse', 'bird'], 3);
      const expected = true;

      expect(actual).toEqual(expected);
    });
  });

  describe('Default paramters', () => {
    it('no second paramter', () => {
      const actual = someLong(['a', 'b', 'abc']);
      const expected = false;

      expect(actual).toEqual(expected);
    });
    it('no paramters ', () => {
      const actual = someLong();
      const expected = false;

      expect(actual).toEqual(expected);
    });
  });
});
