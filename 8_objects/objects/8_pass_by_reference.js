// Objects are `passed by reference`

// functions that update object properties mutate the object permanently

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = (obj) => obj['Fuel Type'] = 'avocado oil';

let remotelyDisable = (obj) => obj.disabled = true;

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
