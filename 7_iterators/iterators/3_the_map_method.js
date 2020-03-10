// .map() is like .forEach() and takes a callback as an arg

// it will iterate over every element of an array and then push each value into a new array

// then it returns that new array

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(bigNumber => bigNumber / 100);

console.log(smallNumbers);
