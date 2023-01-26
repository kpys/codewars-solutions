// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    const withoutVow = str.replace(/[aeiou]/gi,'')
    if(str === '' || withoutVow.length === 0) {
      return 0
    } else{
      return withoutVow.replace(/[^a-z]/gi,'')
                        .length
    }
  }