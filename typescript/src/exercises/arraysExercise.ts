// ******************* PART 1 *******************
// Create an empty array of numbers called "ages":
const ages: number[] = [];

// ******************* PART 2 *******************
// Create an array variable called gameBoard that starts as an empty array and is defined to hold a 2 dimensional array of strings.
const gameBoard: string[][] = [];

// ******************* PART 3 *******************
// Create a Product type that contains a name and a price, e.g., {name: "coffee mug", price: 11.50}.
type Product = {
  name: string,
  price: number
};

// ******************* PART 4 *******************
// Write a function called getTotal that accepts an array of Product types and returns the sum of all the products' prices.
function getTotal(productTypes: Product[]): number {
  return productTypes.reduce((total, curVal) => {
    return total += curVal.price;
}, 0);
}

console.log(getTotal([{ name: 'Fuji Apples', price: 3.45 }, { name: 'Gala Apples', price: 2.99 }]));
