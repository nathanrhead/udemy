// ******************* PART 1 *******************
// Create a variable called highScore that can be a number OR a boolean.
let highScore: number | boolean;
highScore = 10;
highScore = false;

// ******************* PART 2 *******************
// Create an array called stuff that can hold either numbers OR strings, but not both.
const stuff: number[] | string[] = [1, 2, 3];

// ******************* PART 3 *******************
// Create a literal type called SkillLevel with the following 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert".
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// ******************* PART 4 *******************
// Create an object type called SkiSchoolStudent with the name as a string, the age as a number, the sport as either "ski" or "snowboard", and the level as a value from the SkillLevel type (from above).
type SkiSchoolStudent = { name: string, age: number, sport: 'ski' | 'snowboard', level: SkillLevel };

// ******************* PART 5 *******************
// Define a type to represent an RGB color, where r should be a number, g should be a number, and b should be a number.
type RgbColor = { r: number, g: number, b: number };

// Define a type to represent an HSL color, where h should be a number, s should be a number, and l should be a number.
type HslColor = { h: number, s: number, l: number };

// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors: (RgbColor | HslColor)[] = [];

// ******************* PART 6 *******************
// Write a function called "greet" that accepts a single string OR an array of strings and prints "Hello, <name>" for that single person OR for each person in the array.
const greet = (name: string | string[]): void => {
  if (Array.isArray(name)) {
    name.forEach(name => console.log(`Hello, ${name}\n`));
  } else console.log(`Hello, ${name}`);
};

export {};