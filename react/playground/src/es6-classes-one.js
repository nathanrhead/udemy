class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
    this.description = this.getDescription();
  }

  getGreeting() {
    return `Hello, my name is ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() { // Overrides the parent's version of getDescription.
    let description = super.getDescription(); // This calls the parent's version of getDescription and stores its result.

    if (this.hasMajor) description += ` His major is ${this.major}.`;

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.location) greeting += ` I'm visiting from ${this.location}.`;

    return greeting;
  }
}

const personOne = new Student('Sasha', 10, 'Russian');
console.log({personOne});
console.log('has major?:', personOne.hasMajor());
console.log('get description:', personOne.getDescription());

const travelerOne = new Traveler('Olya', 36, 'St. Petersburg');

console.log('traveler greeting:', travelerOne.getGreeting());

