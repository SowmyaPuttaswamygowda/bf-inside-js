'use strict';
debugger;

// Function to convert a Roman numeral to an integer
function romanToInt(roman) {
    // Create a map to store the values of Roman numerals
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0; // Initialize the result

    // Iterate through the Roman numeral from left to right
    for (let i = 0; i < roman.length; i++) {
        // Get the value of the current Roman numeral character
        const currentNumeralValue = romanNumerals[roman[i]];
        
        // Check if the next numeral is greater than the current one
        if (i + 1 < roman.length && romanNumerals[roman[i + 1]] > currentNumeralValue) {
            // If so, subtract the current numeral value from the result
            result -= currentNumeralValue;
        } else {
            // Otherwise, add the current numeral value to the result
            result += currentNumeralValue;
        }
    }

    return result; // Return the final result
}

// Function to test the Roman to Integer conversion
function testRomanToInt(input, actualOutput, expectedOutput) {
    // Check if the actual output matches the expected output
    if (actualOutput === expectedOutput) {
        console.log(`Test Passed: Input: ${input}, Expected Output: ${expectedOutput}, Actual Output: ${actualOutput}`);
    } else {
        console.error(`Test Failed: Input: ${input}, Expected Output: ${expectedOutput}, Actual Output: ${actualOutput}`);
    }
}

// Test cases
testRomanToInt("III", romanToInt("III"), 3); // Test case 1
testRomanToInt("IV", romanToInt("IV"), 4); // Test case 2
testRomanToInt("IX", romanToInt("IX"), 9); // Test case 3
testRomanToInt("LVIII", romanToInt("LVIII"), 58); // Test case 4
testRomanToInt("MCMXCIV", romanToInt("MCMXCIV"), 1994); // Test case 5
testRomanToInt("LV", romanToInt("LV"),55);//test case
 
/*debugger;
// Function to convert Roman numeral to integer
function romanToInt(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    // Get the value of the current Roman numeral
    let currentVal = romanNumerals[roman[i]];
    
    // Get the value of the next Roman numeral (if exists)
    let nextVal = romanNumerals[roman[i + 1]];
    
    // If the value of the current numeral is less than the next one, subtract it
    if (nextVal && currentVal < nextVal) {
      result -= currentVal;
    } else {
      result += currentVal;
    }
  }

  return result;
}

// Testing with Jest

describe('Roman to Integer Conversion', () => {
  it('should convert simple Roman numerals correctly', () => {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('LVIII')).toBe(58);
  });

  it('should handle edge cases correctly', () => {
    expect(romanToInt('')).toBe(0); // Empty string
    expect(romanToInt('CDXLIV')).toBe(444); // Subtractive notation
    expect(romanToInt('MCMXCIV')).toBe(1994); // Complex numeral
  });
});*/
