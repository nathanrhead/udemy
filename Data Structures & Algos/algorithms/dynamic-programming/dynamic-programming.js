
const addTo80 = n => n + 80;

const memoizedAddTo80 = n => {
  const cache = {};

  // Child function that allows for cache not to be reset, thanks to a feature called "closure" in JavaScript, a function that “remembers” its lexical scope, even when the function is executed outside that scope. This allows a function to retain access to variables defined in its outer scope, even after that scope has finished executing.
  return (n) => {
    if (n in cache) { // -> if cache[n].
      return cache[n];
    } else {
      console.log('Long time.');
      return cache[n] = addTo80(n);
    }
  }
}

let memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(5));

// The recursive algo to find the number at index n of the Fibonacci sequence is a great example of the benefit of dynamic programming.

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

console.log(fibonacciRecursive(20));

memoized = fibonacciRecursiveDP();
console.log(memoized(20));
console.log(memoized(20));
