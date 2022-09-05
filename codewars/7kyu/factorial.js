// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


function factorial(n){
    if (n === 0 || n === 1){
      return 1
    } else{
    let count = 1
    for(let i = 1; i <= n; i++){
      count = count * i
    }
      return count
    }
  }