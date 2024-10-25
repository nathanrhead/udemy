// Selection sort works by scanning a list of items for the smallest and swapping it with the value in position 1. Rinse and Repeat.
// Time complexity is O(n^2), or quadratic, because of the nested loops.
// Space complexity is O(1), because the list is changed in place.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    let smallestIndex = i;
    
    for(let j = i + 1; j < array.length; j++) {
      const current = array[j];
      
      if (current < array[smallestIndex]) smallestIndex = j;
    }
    
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }

  return array;
}

console.log(selectionSort(numbers));