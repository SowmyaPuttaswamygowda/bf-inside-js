// #todo

'use strict';

console.log('-- begin --');

// a < b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

// fill in the blanks to pass the assertions
// there may be more than one correct answer!

/*const _1_expect = _; // 1 < 1
const _1_native = '1' < 1;
console.assert(_1_expect === _1_native, 'Test 1');

const _2_expect = _; // 0 < 0
const _2_native = '' < null;
console.assert(_2_expect === _2_native, 'Test 2');

const _3_expect = false; // __
const _3_native = _ < null;
console.assert(_3_expect === _3_native, 'Test 3');

const _4_expect = _; // __
const _4_native = '0.0' < false;
console.assert(_4_expect === _4_native, 'Test 4');

const _5_expect = _; // __
const _5_native = false < true;
console.assert(_5_expect === _5_native, 'Test 5');

const _6_expect = _; // __
const _6_native = '13' < true;
console.assert(_6_expect === _6_native, 'Test 6');

const _7_expect = _; // __
const _7_native = 'aa' < 'ab';
console.assert(_7_expect === _7_native, 'Test 7');

const _8_expect = _; // __
const _8_native = 'aa' < 'aa';
console.assert(_8_expect === _8_native, 'Test 8');

const _9_expect = _; // __
const _9_native = 0 < '';
console.assert(_9_expect === _9_native, 'Test 9');

console.log('-- end --');*/

// Test 1: Comparing '1' and 1
// Since one argument is a string and the other is a number,
// '1' is converted to a number and compared as numbers.
// '1' converts to 1, so 1 is not less than 1.
const _1_expect = false;
const _1_native = '1' < 1;
console.assert(_1_expect === _1_native, 'Test 1');

// Test 2: Comparing '' and null
// Since both arguments are not strings, they are converted to numbers.
// An empty string '' is converted to 0, null is converted to 0.
// 0 is not less than 0.
const _2_expect = false;
const _2_native = '' < null;
console.assert(_2_expect === _2_native, 'Test 2');

// Test 3: Comparing false and null
// Since both arguments are not strings, they are converted to numbers.
// false is converted to 0, null is converted to 0.
// 0 is not less than 0.
const _3_expect = false;
const _3_native = false < null;
console.assert(_3_expect === _3_native, 'Test 3');

// Test 4: Comparing '0.0' and false
// Since one argument is a string and the other is a boolean,
// '0.0' is converted to a number and compared as numbers.
// '0.0' converts to 0, false converts to 0.
// 0 is not less than 0.
const _4_expect = false;
const _4_native = '0.0' < false;
console.assert(_4_expect === _4_native, 'Test 4');

// Test 5: Comparing false and true
// Since both arguments are not strings, they are converted to numbers.
// false is converted to 0, true is converted to 1.
// 0 is less than 1.
const _5_expect = true;
const _5_native = false < true;
console.assert(_5_expect === _5_native, 'Test 5');

// Test 6: Comparing '13' and true
// Since one argument is a string and the other is a boolean,
// '13' is converted to a number and compared as numbers.
// '13' converts to 13, true converts to 1.
// 13 is not less than 1.
const _6_expect = false;
const _6_native = '13' < true;
console.assert(_6_expect === _6_native, 'Test 6');

// Test 7: Comparing 'aa' and 'ab'
// Both arguments are strings, so they are compared character by character based on their Unicode code points.
// 'a' comes before 'b', so 'aa' is less than 'ab'.
const _7_expect = true;
const _7_native = 'aa' < 'ab';
console.assert(_7_expect === _7_native, 'Test 7');

// Test 8: Comparing 'aa' and 'aa'
// Both strings are the same, so 'aa' is not less than 'aa'.
const _8_expect = false;
const _8_native = 'aa' < 'aa';
console.assert(_8_expect === _8_native, 'Test 8');

// Test 9: Comparing 0 and ''
// Since one argument is a number and the other is a string,
// '' is converted to a number.
// An empty string '' converts to 0.
// 0 is not less than 0.
const _9_expect = false;
const _9_native = 0 < '';
console.assert(_9_expect === _9_native, 'Test 9');

console.log('-- end --');
