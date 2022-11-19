// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


function cubeOdd(arr) {
    if(arr.filter(x => typeof x === 'number').length === arr.length){
        let cubed = arr.map((x,i) => x ** 3)
        let cubFinal = cubed.filter((x,i) => x % 2 !== 0).reduce((tot, curr) => tot + curr, 0) 
        return cubFinal
    } else {
      return undefined
    }
   
  }