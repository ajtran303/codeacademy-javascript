// MDN Web Docs for more array methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// See: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat(), .indexOf()

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
// removes first element
console.log(groceryList);

groceryList.unshift('popcorn');
// prepends element to array
console.log(groceryList);

console.log(groceryList.slice(1, 4)); // slice(startAt, endBefore)
// slice method does not mutate
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
// find index
console.log(pastaIndex);
