"use strict";
// Make sure that "originalTitle" is optional and "title" is readonly
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object and returns the movie's worldwide gross minus its budget.
const getProfit = (movie) => {
    const { grossWorldwide, budget } = movie.boxOffice;
    return grossWorldwide - budget;
};
console.log(getProfit(dune));
console.log(getProfit(cats)); // => -21166652
