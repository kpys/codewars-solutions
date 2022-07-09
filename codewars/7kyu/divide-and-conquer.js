// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.


function divCon(x){
    const strings = x.filter(x => typeof(x) === 'string').map(x => +x).reduce((tot,curr) => tot+curr,0)
    const nonStrings = x.filter(x => typeof(x) === 'number').reduce((tot,curr) => tot+curr,0)
    return nonStrings - strings
  }