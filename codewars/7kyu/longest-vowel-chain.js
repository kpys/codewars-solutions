// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon


function solve(s){
    let split = s.split('')
    let results = []
    let count = 0
   for(let i =0; i <= split.length; i++){
     if(split[i] === 'a' || split[i] === 'e' ||  split[i] === 'i' ||  split[i] === 'o' || split[i] === 'u'){
        count++
     } else{
       results.push(count)
       count = 0
     }
   }
    return Math.max(...results)
  }