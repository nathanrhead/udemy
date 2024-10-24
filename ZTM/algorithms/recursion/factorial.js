// Write two functions that find the factorial of any number. One should use recursivion, the other should just use a for-loop.
// An example of a factorial is the following: 5! = 5 * 4 * 3 * 2 * 1 = 120.
// Two drawbacks of recursion are (a) the risk of stack overflow (eternal loop) and (b) the space complexity, if the callback stack gets very big.

// Big O for both of these solutions is O(n), n being the number of items between 2 (or, basically, 0) and the number. Space is O(1) for the iterative solution, but O(n) for the recursive solution, because of the call stack = n (more or less).
function findFactorialRecursive(number) {
  if (number === 2) return number;
    
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
