// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

function scrollingText(text){
    let arr = [text]
    for(let i = 1; i < text.length; i++){
      arr.push(text.slice(i) + text.slice(0,i))
    }
    return arr.map(x => x.toUpperCase())
  }