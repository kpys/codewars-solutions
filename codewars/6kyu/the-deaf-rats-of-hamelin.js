
// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

// Series
// The deaf rats of Hamelin (2D)

var countDeafRats = function(town) {
    town = town.replace(/\s/g, '').split('')
    const p = town.indexOf('P')
    let left = []
    let right = []
    for(let i = 0; i <= p; i+=2){
      left.push(town.slice(i,i+2))
    }
    for(let i = p + 1; i < town.length; i+=2){
      right.push(town.slice(i, i+2))
    }
    left = left.filter(x => x[1] == '~' && x[0] == 'O').length
    right = right.filter(x => x[0] == '~' && x[1] == 'O').length
    return right + left
  } 
  