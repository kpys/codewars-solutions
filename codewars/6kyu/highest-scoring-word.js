// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



function high(x){
    const alph = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'.toLowerCase().split(', ')
    const arrOfX = x.split(' ').map(x => x.split('').map(x => alph.indexOf(x) + 1 ).reduce((tot,curr) => tot+curr,0))
    const max = arrOfX.indexOf(Math.max(...arrOfX))
    return x.split(' ')[max]
  }