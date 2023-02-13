// Write a function that returns the total surface area and volume of a box as an array: [area, volume]



function getSize(a, b, c){
    let volume = a * b * c
    let area = (2 * a * b) + (2 * a * c) + (2 * b * c)
    return [area, volume]
    }
  