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


function fibonacciRecursive(n) { // O(2^n) = exponential time, which is worse than quadratic time O(n^2).
  if (n < 2) return n;

  console.log({n});
  const temp = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

  console.log({temp});

  return temp;
}


console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));