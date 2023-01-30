// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//P-R-E-P
function duplicateCount(text){
    //P string, can be empty, upper,lower,number
    //R count of char that are duplicate as a num
    //E text ---> 'bob' --> {b: 2} --> return 1
    //P text to same case
    
      let insensitive = text.toLowerCase().split('')
      if(text === ''){
        return 0
      } else{
        let obj = {}
        for(let i = 0 ; i < insensitive.length; i++){
          if(obj[insensitive[i]] === undefined){
            obj[insensitive[i]] = 1
          }else{
            obj[insensitive[i]] += 1
          }
        }
        return Object.values(obj).filter(x => x !== 1 ).length
      }
      //text to arr --> arr duplicate count with a loop forEach into obj
      //get duplicates
      //return
  }