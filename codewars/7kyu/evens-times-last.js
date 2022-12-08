// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


function evenLast(numbers) {
    const filtered = numbers.filter((x,i) => i % 2 === 0)
    return filtered.map(x => x * numbers[numbers.length - 1]).reduce((tot, curr) => tot + curr, 0)
  }