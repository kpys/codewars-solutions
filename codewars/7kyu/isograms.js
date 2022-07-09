// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
    let normalized = str.split('').map(x => x.toLowerCase())
    let checkForLetter = []
    for(let i = 0; i < normalized.length; i++){
      checkForLetter.includes(normalized[i]) === false ? checkForLetter.push(normalized[i]) : -1
    }
    checkForLetter.join('')
    return normalized.length === checkForLetter.length
  }