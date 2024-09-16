'use strict';
// Defines the array as always and necessarily empty.
const users = [];
// To define a variable as an instantiatable array, the type of the entries must accompany the array symbol.
const activeUsers = [];
const ageList = [];
const boolean = [];
// Alternate syntax for defining an array type.
const bools = [];
// Defining mixed types. (While the type "any" could be used, it's best practice to restrict the type definiton to its most specific.)
const mixedArray = [];
mixedArray.push(1);
mixedArray.push('red');
// Defining an array of all numbers OR all strings, but not both.
const oneOrTheOther = [];
const coordies = [];
//Defining mixed custom types.
const customMixedArray = [];
customMixedArray.push('orange');
customMixedArray.push({ x: 4, y: 4 });
// Creating a two-dimensional array of strings.
const matrix = [['do', 're', 'mi'], ['fa', 'so', 'la'], ['ti', '', '']];
// Creating a three-dimensional array of numbers.
const numMatrix = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [1, 2, 3]
    ]
];
