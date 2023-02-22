// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits(...array) {
    let nums = [0,1,2,3,4,5,6,7,8,9]
    let arr = []
    let arrayOfSep = array.join('').split('').map(x => +x)
    for(let i = 0; i < nums.length; i++){
      if(arrayOfSep.indexOf(nums[i]) === -1){
        arr.push(nums[i])
      }
    }
    return String(arr.join(''))
  }