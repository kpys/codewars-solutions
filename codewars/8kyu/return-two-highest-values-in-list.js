// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []


function twoHighest(arr) {
    const sortedArr = arr.sort((a,b) => b-a)
    let result = []
    for(let i = 0; i < arr.length ; i++){
     if(!result.includes(sortedArr[i])){
       result.push(sortedArr[i])
     } 
      if(result.length === 2){
        break
      }
    }
    return result
  }