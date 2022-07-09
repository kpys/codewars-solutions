// Task
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

// Example
// generateIntegers(2, 5) // --> [2, 3, 4, 5]



function generateIntegers(m, n) {
    let array = []
    for(let i = m; i <= n; i++){
      array.push(i)
    }
    return array
  }