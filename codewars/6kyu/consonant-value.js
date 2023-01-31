// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// If you like this Kata, please try:

// Word values

// Vowel-consonant lexicon

function solve(s) {
    const alph = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'.toLowerCase().split(', ')
    let strSplit = s.split('')
    let str = ''
    let arr = []
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].match(/[b-d-f-h-j-n-p-t-v-z]/gi)){
        str += strSplit[i]
        if(strSplit[strSplit.length - 1] === strSplit[i]){
          arr.push(str)
        }
      } else{
          if(str !== ''){
            arr.push(str)
            str = ''
          }
      }
    }
    const arrOfVal = arr.map(x => x.split('')
                                    .map(x => alph.indexOf(x) + 1)
                                    .reduce((tot, curr) => tot + curr, 0))
    return Math.max(...arrOfVal)
  };
  