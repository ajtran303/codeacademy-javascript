// Logical operators add more sophistication to evaluating booelan values

// && and / both must be true

// || or / either must be true

// ! not / bang / negates or reverses a boolean

let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' || tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
