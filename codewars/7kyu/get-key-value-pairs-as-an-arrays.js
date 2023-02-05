// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?


function keysAndValues(data){
    // P - obj prop name val pairs
    //R - two arrays, one prop name, other prop value
    // E - {a:2, b:5} [a,b] [2,5]
    // P  Object.values Object.keys return arr
    const values = Object.values(data)
    const keys = Object.keys(data)
    return [keys,values]
  }