// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.



function findLongest(array){
    let elementsLength = String(array).split(',').sort((a,b) => b.length - a.length)
    return Number(elementsLength[0])
  }