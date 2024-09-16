'use strict';
;
const sasha = { id: 4, first: 'Alexander', last: 'Cox', nickname: 'Sasha', sayHi: () => { return 'Hello'; }, sayBye: () => { return 'Bye'; }, sayHiByName(theName) { return `Hi, ${theName}`; } };
;
const shoes = {
    name: 'Arch Healer',
    price: 99,
    applyDiscount(discountAmount) {
        const newPrice = this.price * (1 - discountAmount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4)); // -> discount = 40%;
;
;
const car = { color: 'orange', make: 'Porche' }; // Both keys must exist in this object.
;
const truck = { color: 'red', make: 'Rivian', cabSize: 'Four Door', bedLength: 7 };
const semiTruck = {
    color: 'yellow',
    make: 'Mack',
    cabSize: 'Four Door',
    bedLength: 24,
    licenseReq: 'CDL'
};
