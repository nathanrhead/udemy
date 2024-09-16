"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ******************* PART 1 *******************
// Create a variable called highScore that can be a number OR a boolean.
let highScore;
highScore = 10;
highScore = false;
// ******************* PART 2 *******************
// Create an array called stuff that can hold either numbers OR strings, but not both.
const stuff = [1, 2, 3];
// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors = [];
// ******************* PART 6 *******************
// Write a function called "greet" that accepts a single string OR an array of strings and prints "Hello, <name>" for that single person OR for each person in the array.
const greet = (name) => {
    if (Array.isArray(name)) {
        name.forEach(name => console.log(`Hello, ${name}\n`));
    }
    else
        console.log(`Hello, ${name}`);
};
