// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let arr = []
    for(let i = 0; i < array.length - 1; i++){
      if(array[i + 1] > array[i]){
        arr.push('asc')
      } else{
        arr.push('desc')
      }
    }
    return arr.every(x => x === 'desc') ? 'yes, descending' : arr.every(x => x === 'asc') ? 'yes, ascending' : 'no'
  }