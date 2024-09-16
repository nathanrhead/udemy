// ******************* PART 1 *******************
// Write a function called "twoFer" that accepts a person's name. It should return a string in the format "one for <name>, one for me". If no name is provided, it should default to "you".
function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
}

// Tests
console.log(twoFer()) // => "One for you, one for me"
console.log(twoFer("Elton")) // => "One for Elton, one for me"

// ******************* PART 2 *******************
// Write a isLeapyear() function that accepts a year and returns true/false depending on whether the year is a leap year.
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF:
// - it is a multiple of 4 AND not a multiple of 100
// ...OR...
// - it is a multiple of 400 (hint: use modulo)

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
}

const isLeapYear2 = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
 

// Tests
console.log(isLeapYear(2012)) // => true
console.log(isLeapYear(2013)) // => false
console.log(isLeapYear2(2012)) // => true
console.log(isLeapYear2(2013)) // => false

