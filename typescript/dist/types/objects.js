"use strict";
// Objects may be typed by declaring the structure of the object in the annotation. Accessing a property that isn't defined or performing operations that ignore type will throw errors.
const printName = (name) => {
    console.log(`Name: ${name.first} ${name.last}`);
};
printName({ first: 'Nate', last: 'Cox' });
// Declaring a variable with a type of object.
let coordinates = { x: 14, y: 24 };
// Declare the return type to be an object with the indicated structure.
function randomCoordinate1() {
    const x = Math.ceil(Math.random() * 10);
    const y = Math.ceil(Math.random() * 10);
    return { x, y };
}
console.log(randomCoordinate1());
const user = {
    id: 4,
    username: 'Sasha'
};
// user.id = 5; // TypeScript will mark this as read only and won't let you change it (once it has been instantiated).
