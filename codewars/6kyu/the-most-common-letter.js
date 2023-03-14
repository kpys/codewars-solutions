// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

// If such letters are two or more, choose the one that appears in the string( earlier.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'


function replaceCommon(string, letter) {
    let obj = {}
    string = string.split('')
    for(let i = 0 ; i < string.length; i++){
      if(string[i] !== ' '){
        if(Object.hasOwn(obj, string[i])){
        obj[string[i]] += 1
      }else{
        obj[string[i]] = 1
      }
      }
      
    }
    const entries = Object.entries(obj)
    const values = Object.values(obj)
    const length = Math.max(...values)
    const common =  entries.filter(([key,value]) => value === length).map(([key,value]) => key)
    return string.map(x => x === common[0] ? letter : x).join('')
  }