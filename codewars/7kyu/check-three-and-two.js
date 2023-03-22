// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"


function checkThreeAndTwo(array) {
    let obj = {}
    for(let i = 0; i < array.length; i++){
      if(obj.hasOwnProperty(array[i]) === true){
        obj[array[i]] += 1
      } else{
        obj[array[i]] = 1
      }
    }
    const three = Object.values(obj).filter(x => x === 3)
    const two = Object.values(obj).filter(x => x === 2)
    return three.length >= 1 && two.length >= 1
  }