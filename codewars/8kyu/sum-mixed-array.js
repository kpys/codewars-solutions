// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
    let mapped = x.map((element,i) => Number(element))
    return mapped.reduce((total,current) => total + current, 0)
  }
  