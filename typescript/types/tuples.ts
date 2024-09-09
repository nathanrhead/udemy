'use strict';

// Exclusive to TypeScript, this type is defined by both data type and its order.
let myTuple: [number, string];

const rgbColor: [number, number, number] = [255, 0, 255];

type ResponseCode = [number, string];

const goodResponse = [200, 'Okay'];

// Using push after the tuple has been created, TS doesn't throw any errors.
goodResponse.push('Additional string');
goodResponse.pop();
goodResponse.pop();
goodResponse.pop();

/* Tuples aren't used very much. Objects will typically do the job. */

// Using the tuple type as an array.
const responses: ResponseCode[] = [
  [200, 'Okay'],
  [404, 'Not found']
];

