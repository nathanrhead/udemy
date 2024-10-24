const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let n = array.length;

  while (n) {
    for (let i = 0; i < array.length - 1; i++) { 
      let a = array[i];
      let b = array[i + 1];
  
      if (a > b) {
        const temp = a;

        array[i] = b;
        array[i + 1] = temp;
      } else {
        continue;
      }
    }

    n--;
  }

  return array;
}

console.log(bubbleSort(numbers));
