// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"



function evenOrOdd(str) {
    const split = str.split('')
    const even = split.filter(x => +x % 2 === 0).map(x => +x).reduce((tot,curr) => tot + curr, 0)
    const odd =  split.filter(x => +x % 2 !== 0).map(x => +x).reduce((tot,curr) => tot + curr,0)
    return even === odd ? "Even and Odd are the same" : even > odd ? "Even is greater than Odd" : "Odd is greater than Even"
  }