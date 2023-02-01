// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters


function kebabize(string) {
    //P - string, camelCase, no nums visible
    //R - string, delimited by -, all lowerCase
    //E - 'johnDoeStar' => john-doe-star
    //P - loop and seperate at upperCase or add hyphen before letter and make it lowerCase
        // join in diff var
        //return string 
      let arr = string.replace(/[0-9]/g,'').split('')
      let str = arr[0].toLowerCase()
      for(let i = 1; i< arr.length; i++){
          if(arr[i] === arr[i].toUpperCase()){
            str += `-${arr[i].toLowerCase()}`
          } else{
            str += arr[i].toLowerCase()
          }
        }
    return str
  }