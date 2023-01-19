// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold



function longestWord(stringOfWords){
    let split = stringOfWords.split(' ')
    let index = -1
    for(let i = 0; i< split.length; i++){
      if(split[i].length > index){
        index = split[i].length
      }
    }
    split = split.map((x,i) => x.length ).map((x,i) => x === index ? i : -1 ).filter(x => x !== -1)
    if(split.length == 1){
      return stringOfWords.split(' ')[split[0]]
    } else{
      return stringOfWords.split(' ')[split[split.length - 1]]
    }
  }