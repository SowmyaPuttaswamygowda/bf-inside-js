// #todo

'use strict';

console.log('-- begin --');

// a > b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

// fill in the blanks to pass the assertions
//  there may be more than one correct answer!

const _1_expect = false; // '1' > 1;_
const _1_native = '1' > 1;
console.assert(_1_expect === _1_native, 'Test 1');

const _2_expect = false; // _undefined > null;
const _2_native = undefined > null;
console.assert(_2_expect === _2_native, 'Test 2');

const _3_expect = false; // undefined > null;
const _3_native =  undefined > null;
console.assert(_3_expect === _3_native, 'Test 3');

const _4_expect = true; // true >false
const _4_native = true > false;
console.assert(_4_expect === _4_native, 'Test 4');

const _5_expect = false; // false > true
const _5_native = false > true;
console.assert(_5_expect === _5_native, 'Test 5');

const _6_expect = true; // _'13' > true;_
const _6_native = '13' > true;
console.assert(_6_expect === _6_native, 'Test 6');

const _7_expect = false; // _'aa' > 'ab';_
const _7_native = 'aa' > 'ab';
console.assert(_7_expect === _7_native, 'Test 7');

const _8_expect = true; // In this case, 'b' comes after 'a' in the Unicode sequence, so 'bc' is greater than 'ab'.
const _8_native = 'bc' > 'ab';
console.assert(_8_expect === _8_native, 'Test 8');

const _9_expect = false; // 'ab' cannot be converted to a number, thus it becomes NaN
const _9_native = 0 > 'ab';
console.assert(_9_expect === _9_native, 'Test 9');

console.log('-- end --');
