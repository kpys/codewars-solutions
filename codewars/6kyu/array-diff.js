// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
    //P two args, array with numbers, just nums, can be empty
    //R array of nums or empty arr, arr of different values from a to b
    //E [2,3,5,3][2,1,4] => [3,5,3]
    //P 
    // check if arr empty 
    if(a.length === 0){
        return []
      } else if(b.length === 0){
        return a  
    //a.filter b.includes(x) return arr
    } else{
      return a.filter(x => !b.includes(x))
    }
  }