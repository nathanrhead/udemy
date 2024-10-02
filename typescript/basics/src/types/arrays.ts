'use strict';

// Defines the array as always and necessarily empty.
const users: [] = []; 

// To define a variable as an instantiatable array, the type of the entries must accompany the array symbol.
const activeUsers: string[] = [];
const ageList: number[] = [];
const boolean: boolean[] = [];

// Alternate syntax for defining an array type.
const bools: Array<boolean> = [];

// Defining mixed types. (While the type "any" could be used, it's best practice to restrict the type definiton to its most specific.)
const mixedArray: (number | string)[] = [];
mixedArray.push(1);
mixedArray.push('red');

// Defining an array of all numbers OR all strings, but not both.
const oneOrTheOther: number[] | string[] = [];

// Defining custom types.
type PointAgain = { x: number, y: number };
const coordies: Point[] = [];

//Defining mixed custom types.
const customMixedArray: (string | PointAgain)[] = [];
customMixedArray.push('orange');
customMixedArray.push({ x: 4, y: 4});

// Creating a two-dimensional array of strings.
const matrix: string[][] = [['do', 're', 'mi'], ['fa', 'so', 'la'], ['ti', '', '']];

// Creating a three-dimensional array of numbers.
const numMatrix: number[][][] = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [7, 8, 9],
    [1, 2, 3]
  ]
];

