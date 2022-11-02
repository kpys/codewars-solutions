// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


function shorter_reverse_longer(a,b){
    const orderLonger = [a,b].sort((a,b) => b.length - a.length)
    return a.length === b.length ? b + a.split('').reverse().join('') + b : orderLonger[1] + orderLonger[0].split('').reverse().join('') + orderLonger[1]
  }