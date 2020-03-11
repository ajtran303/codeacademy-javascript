// MDN Docs for object methods

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
// returns object's keys as a new array
console.log(robotKeys);


// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
// returns a new array with sub-arrays for each key-value pair as elements in those sub-arrays
console.log(robotEntries);

// Declare newRobot below this line:
let upgrades = {laserBlaster: true, voiceRecognition: true};

const newRobot = Object.assign(upgrades, robot); // (target, source)
// "joins" object properties into one object
console.log(newRobot);
