// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    let reversed = x.split('').reverse().join('')
    return reversed.toLowerCase() === x.toLowerCase() ? true : false
   }
   