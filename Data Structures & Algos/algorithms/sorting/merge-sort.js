// One of the most efficient sorting algorithms, merge sort cuts down on the time complexity to O(n log n) by dividing the array by halves until each item is alone. It's space complexity is O(n), because of the stacking recursive functions.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  // The base case.
  if (array.length === 1) return array;

  // Find the halfway point.
  const halfwayPoint = Math.floor(array.length / 2);
  
  // Split the array into right and left halves.
  const left = array.slice(0, halfwayPoint);
  const right = array.slice(halfwayPoint);

  // The recursive case.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let l = 0, r = 0, merged = [];

  console.log({left, right});

  while (l < left.length && r < right.length) {
    const leftValue = left[l];
    const rightValue = right[r];

    console.log({leftValue, rightValue});

    if (leftValue < rightValue) {
      console.log('push left');
      merged.push(leftValue);
      l++;
    } else {
      console.log('push right');
      merged.push(rightValue);
      r++;
    }
  }

  merged = merged.concat(left.slice(l)).concat(right.slice(r));

  console.log({merged, l, r});
  console.log('-----------------------------');

  return merged;
}

console.log(mergeSort(numbers));
