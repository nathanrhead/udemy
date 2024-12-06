// console.log('app.js is running');

// import subtract, { square, add } from './utils'; // Default + named exports. A default import can be named anything; a named import must be named exactly as it is exported.
// console.log('square(4):', square(4));
// console.log('add(4, 3):', add(4, 3));
// console.log('subtract(4, 3):', subtract(4, 3));

// // import * as utils from './utils'; // Export all as an object.
// // console.log('square(4):', utils.square(4));
// // console.log('add(4, 3):', utils.add(4, 3));
// // console.log('subtract(4, 3):', utils.default(4, 3));

// import validator from 'validator'; // Third-party library.
// console.log('validator.isEmail("test"): ', validator.isEmail('test'));

import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const template = <p>Ian wuz here.</p>
root.render(template);