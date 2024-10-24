// Not the most efficient algorithm, either, but it has its use case: when the list is nearly or already sorted or the data set is small. When this is the case, the time complexity is O(n).

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {

    console.log({i}, 'array[i]: ', array[i]);

    // Compare the value at i to the value at 0 and place at 0 if smaller.
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);

      console.log('first if:', array);
    }
    // Insert the number in its rightful spot.
    else {
      for (let j = 1; j < array.length; j++) {

        console.log({j}, 'array[j - 1]:', array[j - 1], 'array[j]:', array[j]);

        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);

          console.log('second if:', array);
        }
      }
    }
  }

  return array;
}

console.log(insertionSort(numbers));
