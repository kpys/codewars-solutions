// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'


function initializeNames(name){
    let nameArr = name.split(' ')
    if(nameArr.length === 2){
      return nameArr.join(' ')
    }else {
      let mapped = nameArr.map((x,i) => i === 0 || i === nameArr.length -1 ? x : x[0] + '.')
      return mapped.join(' ')
    }
  }