// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (array){
    let arr = []
    for(let i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        arr.push(...array[i])
      } else{
        arr.push(array[i])
      }
    }
    return arr
  }