'use script';

// A union type allows for the assigning of multiple types. NB: it's always best to be as strict in your typing as possible.
let age: number | string = 47;
age = 'forty-seven';

type Point = { x: number, y: number };
type Location = { lat: number, long: number };

let coords: Point | Location = { x: 1, y: 2 };
coords = { lat: 5, long: 7 };

// Using a union type with a function.
function printAge(age: number | string): void {
  console.log(`You are ${age} years old.`);
}

// How to do "type narrowing": TS knows that, because the price parameter can either be of type number or string, a type check needs to be performed first.
function calculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') price = parseFloat(price.replace('$', ''));

  return price * tax;
}

// Makes the file into a module, excluding it from duplicate-type-definition checking.
export {};
