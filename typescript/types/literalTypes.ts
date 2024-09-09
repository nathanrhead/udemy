'use strict';

// Define an unchangeable variable. This use case is unnecessary, because assigning "const" to the variable would disallow its changing.
let zero: 0 = 0; // -> Even with "let," this variable can be nothing else but zero.

// Useful use case: combining literal and union types to provide options.
let mood: 'happy' | 'sad' = 'happy';
mood = 'sad';

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
let today: DayOfWeek = 'Monday';

const giveAnswer = (answer: 'yes' | 'no' | 'maybe') => { return `The answer is ${answer}.` };

