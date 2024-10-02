interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: 'Silky',
  eggsPerWeek: 4,
  name: 'Norma',
  age: 2
}

interface ProductObj {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (product: ProductObj): void => {
  console.log(`${product.name}: $${product.price}`);
} 