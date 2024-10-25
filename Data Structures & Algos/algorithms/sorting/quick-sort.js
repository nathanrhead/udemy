// A divide-and-conquer algorithm, quick sort has a time complexity of O(n log n) by using a pivoting technique to break the list into smaller lists, placing anything smaller than the pivot point on the left and anything larger on the right. Picking the right pivot is important, because picking the wrong one can lead to a worst-case time complexity of O(n^2). Its space complexity in the worst case is O(n log n). So, quick sort is potentially the fastest sorting algorithm, but its worst-case scenario is more time intensive than other divide-and-conquer methods.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  console.log(`1) quickSort called with left index = ${left}, right index = ${right}, array: [${array}].`);
  
  let pivot, partitionIndex;

  // The base case: if the left index is greater than the right index, there's nothing to compare.
  if (left < right) {
    pivot = right;
    // console.log(`Pivot chosen: ${pivot} (value: ${array[pivot]})`);

    partitionIndex = partition(array, pivot, left, right);
    console.log(`4) The partition index = ${partitionIndex}`);

    // The recursive case: sort the left and the right.
    console.log(`5a) Recursively quickSort left part (left: ${left}, right: ${partitionIndex - 1}).`);
    quickSort(array, left, partitionIndex - 1); // Left.

    console.log(`5b) Recursively quickSort right part (left: ${partitionIndex + 1}, right: ${right}).`);
    quickSort(array, partitionIndex + 1, right); // Right.
  }

  console.log(`6) Returning array: [${array}]\n-------------------------------------`);
  return array;
}

function partition(array, pivot, left, right) {
  const pivotValue = array[pivot];
  let partitionIndex = left;

  console.log(`2) Partitioning with pivot value = ${pivotValue} (pivot index = ${pivot}).`);
  
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      if (i !== partitionIndex) {
        console.log(`3) Swap left:`);
        swap(array, i, partitionIndex);
      }
      partitionIndex++;
    }
  }

  console.log(`3) Final swap of pivot into place:`);
  swap(array, right, partitionIndex, true);
  
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex, swapFinal = false) {
  if (!swapFinal) console.log(`   a) Swapping index ${firstIndex} (value: ${array[firstIndex]}) with partition index ${secondIndex} (value: ${array[secondIndex]}).`);
  else console.log(`   b) Swapping index ${firstIndex} (value: ${array[firstIndex]}) with partition index ${secondIndex} (value: ${array[secondIndex]}).`);
  
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

console.log(quickSort(numbers, 0, numbers.length - 1));
