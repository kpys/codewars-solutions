// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative


function getAges(sum,difference){
    const bigger = sum / 2 + difference/2
    const smaller = sum / 2 - difference /2 
    return sum < 0 || difference < 0 || smaller < 0 ? null : [bigger,smaller]
  };