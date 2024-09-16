'use strict';

// Interfaces are very similar to types.
// Interfaces describe the shape of objects.
interface PointObject { // No equal sign, as with types. Can end key-value pairs with semicolons or commas.
  x: number;
  y: number;
};

interface PersonObject {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; // One way to write a method on an interface (arrow syntax): it excepts no arguments and must return a string.
  sayBye(): string // Another way to write a method on an inteface: it means the same as the above syntax.
  sayHiByName(name: string): string; // A method with a parameter: the parameter name is a placeholder.
}

const sasha: PersonObject = { id: 4, first: 'Alexander', last: 'Cox', nickname: 'Sasha', sayHi: () => { return 'Hello' }, sayBye: () => { return 'Bye' }, sayHiByName(theName: string) { return `Hi, ${theName}`; }};

// Another example of a method with parameters on an interface. Remember, that the interface just defines the shape of the object (with method), not the object's values or what the method does.
interface ProductObject {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
};

const shoes: ProductObject = {
  name: 'Arch Healer',
  price: 99,
  applyDiscount(discountAmount: number) { // -> discountAmount = .2, e.g.
    const newPrice = this.price * (1 - discountAmount);
    this.price = newPrice;
    return this.price;
  }
};

console.log(shoes.applyDiscount(0.4)); // -> discount = 40%;

// Interfaces, unlike types, may be amended, e.g., in another file.
interface Car {
  color: string;
};

interface Car {
  make: string;
};

const car: Car = { color: 'orange', make: 'Porche' }; // Both keys must exist in this object.

// Interfaces may be extended, as with classes in OOP.
interface Truck extends Car {
  cabSize: 'Two Door' | 'Four Door';
  bedLength: number;
};

const truck: Truck = { color: 'red', make: 'Rivian', cabSize: 'Four Door', bedLength: 7 };

// Interfaces can be extended multiple times = multiple inheritance.
interface SemiTruck extends Car, Truck {
  licenseReq: string;
}

const semiTruck: SemiTruck = {
  color: 'yellow',
  make: 'Mack',
  cabSize: 'Four Door',
  bedLength: 24,
  licenseReq: 'CDL'
};

/* Interfaces vs Types
  1. Interfaces can only describe the shape of an object; a type can describe any data type, e.g., type Color = 'red' | 'blue'.

  2. Interfaces may be amended after initial instantiation; a type cannot be duplicated at all, let alone amended. This allows interfaces to be adapted for the specific needs of a given file, widget, or app after its initial initialization.

  3. Extending interfaces using the "extends" keyword is reminiscent of familiar OOP syntax and functions the same; types use the & operator/keyword, e.g., type Person = Name & { age: number }.
*/
