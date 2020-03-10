// Scope is where the variables are defined.

// Variables declared outside of blocks are in the global scope and are called global variables. They can be accessed by any code in the program.

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

let callMyNightSky = () => {return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;}

console.log(callMyNightSky());
