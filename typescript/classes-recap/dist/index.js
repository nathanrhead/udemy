"use strict";

class Player {
  // A property in a class that exists only on the player class, not on each instance. See static method below for an example.
  static description = 'PLayer in Our Game.';

  // Class fields allow for hardcoding initial values for every instance of the class. These values can later be changed. This is in place of adding these initial key-value pairs in the constructor with "this."
  #score = 0; // The pound sign, which indicates a private field, tells JS that this field is inaccessible outside of the class.
  #numLives = 10;

  // Set your dynamic values in the constructor as usual.
  constructor(first, last, secret = 'none') {
    this.first = first;
    this.last = last;
    this.secret = this.#secret(secret);
  }

  // JS's class "getter" allows for the creation of a property on a class without having to define the property in the constructor or as a class field.
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(name) {
    const splitName = name.split(' ');
    const first = splitName[0];
    const last = splitName[1];

    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  // JS's class "setter," like a getter, allows the creation of a property on a class without having to define the property in the constructor, while giving the flexibility of controlling the input and output.
  set score(newScore) {
    if (newScore < 0) throw new Error('The score must be greater or equal than zero.');

    this.#score = newScore;
  }

  static randomPlayer(name) {
    const newPlayer = new Player();

    newPlayer.fullName = name;
    return newPlayer;
  }

  updateScore(newScore) { // The updating of a private field can still be done with a method inside the class.
    this.#score = newScore;
  }

  #secret(secret) {
    return `${secret}`;
  }
}

// Class inheritance.
class AdminPlayer extends Player {
  isAdmin = true;
  constructor(first, last, secret, powers) {
    super(first, last, secret); // References the constructor function of the parent class.
    this.powers = powers;
  }
}

const playerOne = new Player('Sasha', 'Cox', 'hates avacados');

console.log({playerOne});
console.log('full name:', playerOne.fullName);
console.log('score:', playerOne.score);
playerOne.score = 10;
console.log('new score:', playerOne.score);
console.log(Player.randomPlayer('Nate Cox'));
const admin = new AdminPlayer('Olga', 'Cox', 'Loves miniatures', ['cook', 'perservere']);
console.log({admin});