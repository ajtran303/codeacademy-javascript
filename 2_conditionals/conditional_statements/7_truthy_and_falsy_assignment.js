// Since there are implicit boolean values, conditionals can be written more consisely.

// "Short-circuit evaluation"

let tool = ''; // falsy

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
