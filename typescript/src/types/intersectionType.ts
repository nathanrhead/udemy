
type Circle = {
  radius: number
};

type Colorful = {
  color: string
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'orange'
};

type Cat = {
  numLives: number
};

type Dog = {
  breed: string
}

type CatDog = Cat & Dog & { age: number }; // Adding on an additional property to the intersected types.

const newPet: CatDog = {
  numLives: 9,
  breed: 'husky',
  age: 2
};
