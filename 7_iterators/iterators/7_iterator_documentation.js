// There are a bunch of array iterator methods, look them up at MDN Docs

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// This exercise goes over the some and every methods. both test elements in array against a test passed to it

// some returns true if any pass

// every returns true if all pass

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array

const moreThanFive = s => s.length > 5;

console.log(moreThanFive('four'));

const interestingWords = words.filter(moreThanFive);

console.log(interestingWords);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(moreThanFive));
