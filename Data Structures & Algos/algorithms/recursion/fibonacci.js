/* The Fibonacci Sequence.

Given a number N, return the index value of the Fibonacci sequence, where the sequence is:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

Example: fibonacciRecursive(6) = 8, or 0, 1, 1, 2, 3, 5, 8 where 8 is fSequence[6].
*/

function fibonacciIterative(n){ // O(n) = linear time.
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

let numOfCalcsRecursion = 0;
function fibonacciRecursive(n) { // O(2^n) = exponential time, which is worse than quadratic time O(n^2).
  if (n < 2) return n;
  numOfCalcsRecursion++;

  console.log({numOfCalcsRecursion});

  const temp = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

  return temp;
}

// The algorithm with dynamic programming (i.e., caching).
let numOfCalcsMemoized = 0;
function fibonacciRecursiveDP() {
  const cache = {};
  
  return function findFAtN(n) {
    numOfCalcsMemoized++;
    console.log({numOfCalcsMemoized});

    if (n in cache) {
      return cache[n]; // O(n) the second-plus times that the function is called.
    }
    else {
      if (n < 2) return n;
      return cache[n] = findFAtN(n - 1) + findFAtN(n - 2);
    }
  }
}

// Another approach that avoids recursion. It's called a bottom-up solution. 
function fibonacciThree(n) {
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 1] + answer[i - 2]);
  }

  return answer.pop();
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(20));

const memoized = fibonacciRecursiveDP();
console.log(memoized(20)); 
console.log(memoized(20));

console.log('fibonacciThree: ', fibonacciThree(6));
