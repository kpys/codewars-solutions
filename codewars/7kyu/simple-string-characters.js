// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!



function solve(s){
    const upperCase = s.replace(/[^A-Z]/g,'').length
    const lowerCase = s.replace(/[^a-z]/g, '').length
    const num = s.replace(/[^0-9]/g,'').length
    const special = s.replace(/[a-z0-9]/gi, '').length
    return [upperCase, lowerCase, num, special]
  }