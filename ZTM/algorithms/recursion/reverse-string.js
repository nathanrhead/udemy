function reverseStringIteratively(str) {
  const result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join('');
}

function reverseStringWithReducer(str) {
  return str.split('').reduce((acc, val) => acc = val + acc, '');
}

function reverseStringRecursively(str) {
  // Base case: if the string is empty, return an empty string.
  if (str === '') return str;
  
  // Recursive case: take the first character and call the function on the remaining substring
  return reverseStringRecursively(str.slice(1)) + str[0];
}

console.log(reverseStringIteratively('yoyo master'));
console.log(reverseStringWithReducer('yoyo master'));
console.log(reverseStringRecursively('yoyo master'));
