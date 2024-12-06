console.log('utils.js is running');

export const square = x => x * x;
export const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;

// export { square, add, subtract as default}; // Named export: This is for ES6 and is considered modern. (Also with a default export.)
// module.exports = square; // Named export: This is for CommonJS and is considered legacy.
// export default subtract; // Default export: This is for ES6 and is considered modern. Only one default export per file.
export default (a, b) => a - b; // Default export: This is for ES6 and is considered modern. Only one default export per file.
