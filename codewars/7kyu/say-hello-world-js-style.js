// Write the definition of the function "say" such that calling this:

// say("Hello")("World")
// returns "Hello World"



var say = (string1) => {
    return (string2) =>{
      return string1 + ' ' + string2
    }
  } 