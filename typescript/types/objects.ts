// Objects may be typed by declaring the structure of the object in the annotation. Accessing a property that isn't defined or performing operations that ignore type will throw errors.
const printName = (name: { first: string, last: string }): void => {
  console.log(`Name: ${name.first} ${name.last}`);
}

printName({ first: 'Nate', last: 'Cox' });

// Declaring a variable with a type of object.
let coordinates: { x: number, y: number } = { x: 14, y: 24 };

// Declare the return type to be an object with the indicated structure.
function randomCoordinate1(): { x: number, y: number } { // Named with a 1, because TypeScript doesn't allow for duplicate function names, even across files.
  const x = Math.ceil(Math.random() * 10);
  const y = Math.ceil(Math.random() * 10);
  return { x, y };
}

console.log(randomCoordinate1());

// Read-only types. (Using a type alias: see typeAlias.ts).
type User = {
  readonly id: number,
  username: string
};

const user: User = {
  id: 4,
  username: 'Sasha'
};

// user.id = 5; // TypeScript will mark this as read only and won't let you change it (once it has been instantiated).