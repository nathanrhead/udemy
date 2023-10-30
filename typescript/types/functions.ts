function greet(person: string) {
  return `Hello, ${person}`;
}

function square(num: number) {
  return num & num;
}

function multipleVars(string: string, num: number, bool: boolean) {
  return { string, num, bool };
}

function defaultValues(person: string = 'stranger') {
  if (person === 'stranger') return 'unknown';
  else return person;
}

// How to specify the data type of a function's return value. (TypeScript can also infer the type of a function's return value, so this is a step you'd choose only to make the return value explicit.)
const addNums = (x: number, y: number): number => {
  return x + y;
};

function multiplyNums(x: number, y: number): number {
  return x + y;
}

// A function that may return various data types.
function rando(num: number) {
  if (Math.random() < 0.5) return num.toString();
  else return num;
}

// Annonymous functions understand implicit type.
const colorsAndNumbers = ['red', 'green', 'blue', 0, 1, 2];
colorsAndNumbers.map(color => { // Don't need to indiciate the param's type, because TS knows them.
  return typeof color === 'string' ? color.toUpperCase() : typeof color === 'number' ? color.toFixed() : null;
});

// Void function types: no return value. (Doesn't have to be indicated, because TS will infer void when there's no return value, so this is a stylistic choice.)
function printTwice(msg: string): void {
  console.log(msg);
}

// The NEVER type: used to annotate functions that should never return anything. (A void function stills returns "undefined.") The inferred return type of this function would be "void" without the explicit annotation.
function makeError(msg: string): never {
  throw new Error(msg);
}