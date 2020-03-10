// The best practice is to not define variables in the global scope since they can be accessed anywhere... it can lead to scope pollution

// potential problems from conflicts with locally scoped variables

// in this example, a statement in a function's code block actually updates a global variable

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
