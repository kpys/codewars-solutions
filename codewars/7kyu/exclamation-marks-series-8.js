// Description:
// Move all exclamation marks to the end of the sentence

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"



function remove (string) {
    const leng = string.split('').filter(x => x === '!').length
    return string.split('').filter(x => x !== '!').join('') + '!'.repeat(leng)
  }