// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// The Office I - Outed
// The Office III - Broken Photocopier
// The Office IV - Find a Meeting Room
// The Office V - Find a Chair

function boredom(staff){
    let result = []
    staff = Object.values(staff).map(x =>{
      switch(x){
        case 'accounts':
            return x = 1;
            break;
        case 'finance':
            return x = 2;
            break;
        case 'regulation':
            return x = 3;
            break;
        case 'cleaning':
            return x = 4;
            break;
        case 'retail':
            return x = 5;
            break;
        case 'trading':
        case 'change':
            return x = 6;
            break;
        case 'IS':
            return x = 8;
            break;
        case 'canteen':
            return x = 10;
            break;
        case 'pissing about':
            return x = 25;
            break;
      }
    });
      const score = staff.reduce((tot,curr) => tot + curr, 0)
      return score <= 80 ? 'kill me now' : score >= 100 ? 'party time!!' : 'i can handle this' 
  }