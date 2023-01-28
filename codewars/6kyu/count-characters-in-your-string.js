// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
    let split = string.split('')
    let letters = {}
    for(let i = 0; i < split.length; i++){
      if(!letters.hasOwnProperty(split[i])){
        letters[split[i]] = 1
      } else{
        letters[split[i]] += 1
      }
    }
    return letters
  }