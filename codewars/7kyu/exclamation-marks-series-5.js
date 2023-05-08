// Task
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"


function remove (string) {
    string = string.split(' ')
    let array = []
    const map = string.map(x =>{
      x = x.split('')
      for(let i = x.length -1; i >= 0; i--){
        if(x[i] !== '!'){
          array.push(x.join('').slice(0,i+ 1))
          break;
        }
      }
    });
    return array.join(' ')
  }