// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



function last(x){
    const alph = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'.toLowerCase().split(', ')
    return x.split(' ').sort((a,b) => alph.indexOf(a.charAt([a.length - 1])) - alph.indexOf(b.charAt([b.length - 1])))
   }