// Create a function expression by assigning an anonymous function to a variable (ES6 says use const)

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  };
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
