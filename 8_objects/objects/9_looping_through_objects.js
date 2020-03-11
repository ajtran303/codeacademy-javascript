// "the for...in statement iterates over all enumerable properties of an object that are keyed by strings"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let position in spaceship.crew) {
  console.log(`${position}: ${spaceship.crew[position].name}`)
};

for (let position in spaceship.crew) {
  console.log( `${spaceship.crew[position].name}: ${spaceship.crew[position].degree}` )
};
