// Elements in an array can be accessed by referencing their index position with bracket notation.

// Arrays are zero-indexed -- the first element has an index of 0.

// Attempting to access an index beyond the array will return `undefined`

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem);
// "Fortune..."

console.log(famousSayings[2]);
// "Where..."

console.log(famousSayings[3]);
// undefined
