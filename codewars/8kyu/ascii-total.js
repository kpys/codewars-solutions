// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal (string) {
    return string.split('').map((x,i) => string.charCodeAt(i)).reduce((tot,curr) => tot + curr,0)
  }