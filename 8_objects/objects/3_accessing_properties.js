// object properties can be accessed by bracket notation or dot notation
// it references the key and returns the value

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below

let crewCount = spaceship.numCrew;

console.log(crewCount);

let planetArray = spaceship.flightPath;

console.log(planetArray);
