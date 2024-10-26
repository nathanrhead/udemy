# Dynamic Programming

Despite its fancy name, it's just an technique of optimization using caching.

The approach involves breaking a problem down into discreet sub-problems, solving those sub-problems, and storing their solutions, so that the sub-problem doesn't have to be solved again.

1. Caching: storing values to use later, making programs faster.
2. Memoization: a specific form of caching that involves caching a return value of a function based on its parameters, i.e., if the function is called with the same parameter, the return comes from the cache.

## Example

The Fibonacci sequence offers a good opportunity to see the power of dynamic programmaing at work.

```javascript
function fibonacciRecursive(n) { // O(2^n) = exponential time, which is worse than quadratic time O(n^2).
  if (n < 2) return n;
  
  const temp = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

  return temp;
}
```

Because this algorithm uses recursion, as soon as the requested index gets above in the double digits, the algorithm can start to take several seconds to work, because its time complexity is O(n^2), due to the call stack built in the recursive approach.

However, using memoization not only makes the second call to the function with the same index an O(1) operation, but also decreases the number of times that the first call to the function has to recurse, reducing the time complexity to O(n).

Space complexity, however, is greater with the DP version, because a cache is created. This is the tradeoff, but in the case of the Fibonacci algorithm, the savings in time far outweighs the extra space needed for the cache.

```javascript
function fibonacciRecursiveDP() {
  const cache = {};
  
  return function findFAtN(n) {
    if (n < 2) return n;

    if (n in cache) {
      return cache[n]; // O(1) the second-plus times that the function is called.
    }
    else {
      return cache[n] = findFAtN(n - 1) + findFAtN(n - 2); // O(n). 
    }
  }
}
```

Dynamic programming is like combining the divide-and-conquer method with memoization.

## Steps for Determining When to Use DP

1. Can the problem be divided into a sub-problems, like a tree can be divided into a parent and its children, i.e., can be treated recursively?
2. Are the sub-problems repetitive?
