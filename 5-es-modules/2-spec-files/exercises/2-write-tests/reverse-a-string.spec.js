// #todo

import { reverseAString } from './reverse-a-string.js';

describe('idt should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString(returned)).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString('toads')).toEqual('sdaot');
    });
    // write at least 5 more tests
    it('"hello" should return "olleh"',() => {
      expect(reverseAString('hello')).toEqual('olleh');
    });
    it('"12345" should return "54321"',() => {
      expect(reverseAString('12345')).toEqual('54321');
    });
    it('"abc123" should return "321cba"', () => {
      expect(reverseAString('abc123')).toEqual('321cba');
    });

    it('"!@#$%" should return "%$#@!"', () => {
      expect(reverseAString('!@#$%')).toEqual('%$#@!');
    });
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual('text is not a string');
    });
    // write at least 3 more tests
    it ('123 should return "text is not a string"', () => {
      expect(reverseAString(123)).toEqual('text is not a string');
    });

    it('null should return "text is not a string"',() => {
      expect(reverseAString(null)).toEqual("text is not a string");
    });

    it('undefined should return "text is not a string" ',() => {
      expect(reverseAString(undefined)).toEqual("text is not a string");
    });
  });
});
