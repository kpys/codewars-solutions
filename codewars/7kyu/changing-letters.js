// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


function swap (string) {
    return string.split('').map(x => x.match(/[aeiou]/g) ? x.toUpperCase() : x ).join('')
  }