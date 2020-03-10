// A let variable that has an array as its value can: have elements in its array mutated, have a new array assigned, and have a new different value assigned

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

console.log(condiments);


// a const variable with an array assigned
// only the array elements may be mutated

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon';

console.log(utensils);
