// Instead of writing object types out in an annotation, we may declare them separately in a type alias, or the desired shape of the object, allowing for more readable code and the reuse of the type elsewhere.

type Point = { // The capital letter is not required, though it is conventional.
  x: number,
  y: number
};

let coordinate: Point = { x: 4, y: 4 };

function randomCoordinate2(): Point {
  return { x: Math.ceil(Math.random() * 10), y: Math.ceil(Math.random() * 10) };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.x * 2 };
}

// This is especially helpful with more complicated objects, like long or nested objects.
type Person = {
  name: string,
  age: number,
  parentNames: {
    mom: string,
    dad: string
  }
};

// Example without using the type alias.
const describePersonNoAlias = (person: {
  name: string,
  age: number,
  parentNames: {
    mom: string,
    dad: string
  }
}) => {
  return `Person: ${person.name}, Age: ${person.age}, Parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};

// Example with the type alias.
const describePersonWithAlias = (person: Person) => {
  return `Person: ${person.name}, Age: ${person.age}, Parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};

const person = { name: 'Sasha', age: 10, parentNames: { mom: 'Olga', dad: 'Nate'} };
console.log(describePersonNoAlias(person), describePersonWithAlias(person));

// Making key-value pairs optional.
type pointWithOptional = {
  x: number,
  y: number,
  z?: number // Note the question mark.
};

const myPointWithZ: pointWithOptional = {
  x: 4,
  y: 4,
  z: 9
};

const myPointWithoutZ: pointWithOptional = {
  x: 4,
  y: 4
};
