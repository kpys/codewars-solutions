// Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

// This should only work if the number has 4 digits or more. If not, return "Number is too small".

// Example
// lowestProduct("123456789") --> 24 (1x2x3x4)
// lowestProduct("35") --> "Number is too small"


function lowestProduct(input) { 
    if(input.length < 4){
      return 'Number is too small'
    } else{
      input = input.split('')
      const total = input.map((x,i) => input[i] * input[i+1] * input[i+2] * input[i+3] ).slice(0,-3)
      return Math.min(...total)
    }
  }