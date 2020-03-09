// the most condensed form of refactored arrow function syntax is called "concise body"

// functions taking a single parameter don't need parentheses. But if it takes zero or more than one, it is required.

// a single-line block function body doesn't need curly braces. Whatever is evaluated immediately after the => arrow will be implicitly returned and will not require the return keyword.

// const squareNum = num => num * num;

// const plantNeedsWater = (day) => {
//   return day === 'Wednesday' ? true : false;
// };

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
