// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// complete the function
function solution(string) {
    const str = string.split('').map(x => x === x.toUpperCase() ? ' ' +  x : x) 
    return str.join('')
}
