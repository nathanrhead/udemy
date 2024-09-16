"use strict";
// Explicit defininig of type.
const firstTSVariable = 'Welcome, Nate';
const numberOne = 1;
const booleanOne = true;
// Type inference: only works with var or let, because const can't be changed, so restricting type is pointless.
let secondTSVariable = 'Farewell, Nate';
let thirdTSVariable = 'Ian wuz ere.';
// The "any" type: negates type checking; typically not used, though may be encountered. Typescript will infer an uninstantiated variable's type as "any," e.g., let foundMovie;
let thing = 'yo yo';
thing = 1;
thing = false;
thing.toUpperCase();
thing();
// When to use explicit type setting.
const movies = ['Rocky', 'Rocky II', 'Ad Nauseum'];
let foundMovie;
for (const movie of movies) {
    if (movie === 'Rocky')
        foundMovie = movie;
}
