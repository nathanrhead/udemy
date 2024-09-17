"use strict";
// Instead of writing object types out in an annotation, we may declare them separately in a type alias, or the desired shape of the object, allowing for more readable code and the reuse of the type elsewhere.
let coordinate = { x: 4, y: 4 };
function randomCoordinate2() {
    return { x: Math.ceil(Math.random() * 10), y: Math.ceil(Math.random() * 10) };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.x * 2 };
}
// Example without using the type alias.
const describePersonNoAlias = (person) => {
    return `Person: ${person.name}, Age: ${person.age}, Parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};
// Example with the type alias.
const describePersonWithAlias = (person) => {
    return `Person: ${person.name}, Age: ${person.age}, Parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};
const person = { name: 'Sasha', age: 10, parentNames: { mom: 'Olga', dad: 'Nate' } };
console.log(describePersonNoAlias(person), describePersonWithAlias(person));
const myPointWithZ = {
    x: 4,
    y: 4,
    z: 9
};
const myPointWithoutZ = {
    x: 4,
    y: 4
};
// TS types can be overridden with a "type assertion."
let mystery = 'Ian wuz ere.';
const numChars = mystery.length; // It won't change's mystery's type permanently.
const input = document.getElementById('btn'); // Without casting it to an HTMLInputElement type, it is assigned the generic HTMLElement type, which doesn't have access to the "value" key.
// Using angle brackets is another way to cast to a new type. This syntax doesn't work with JSX (React).
input.value;
