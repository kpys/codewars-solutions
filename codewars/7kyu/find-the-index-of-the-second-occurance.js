// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.

function secondSymbol(s, symbol) {
    const index = s.split('').map((x,i) => x === symbol ? i : -1).filter(x => x !== -1)
    return index.length < 2 ? -1 : index[1]
  }