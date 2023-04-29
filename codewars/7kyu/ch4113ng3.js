// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt){
    let arr = txt.split('').map(x =>{
      switch(x){
          case 'a':
          case 'A':
          return '4'
          break;
          case 'e':
          case 'E':
          return '3'
          break;
          case 'l':
          return '1'
          break;
          default:
          return x
      }
    });
    return arr.join('')
  }