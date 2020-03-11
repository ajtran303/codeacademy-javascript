// Objects are mutable

// Properties inside of objects can be updated with dot or bracket notation and the assignment operator

// If that property did not previously exist, it will be added

// The delete operator can be used to delete properties (the key-value pair) from an object

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
console.log(spaceship);

spaceship.color = 'glorious gold';

console.log(spaceship);

spaceship.numEngines = 4;

console.log(spaceship);

delete spaceship['Secret Mission'];

console.log(spaceship);
