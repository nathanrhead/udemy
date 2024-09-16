"use strict";
const button = document.getElementById('btn'); // The ! in TS removes the "| null" from the type definition. Only use when the element definitely exists. It's called the "non-null assertion operator."
// To TypeScript, the button's type is ether an HTMLElement (generic) or null (if the ID can't be found). 
// To avoid trying to run a method on null, which would throw an error in JS, use the optional chaining operator "?" or guarantee the existence of the element with ! (see line 1).
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => console.log('clicked.'));
button.addEventListener('click', () => console.log('clicked again'));
const input = document.getElementById('to-do-input'); // The input element, without being cast as an HTMLInputElement, would otherwise be assigned the generic type of HTMLElement, which doesn't have a value key defined on it, for example. The button element could also be cast to a more specific type using the type-assertion operator ("as"), e.g., as HTMLButtonELement, especially if the generic HTMLElement type didn't contain all of the methods needed.
button.addEventListener('click', () => { console.log(input.value); });
