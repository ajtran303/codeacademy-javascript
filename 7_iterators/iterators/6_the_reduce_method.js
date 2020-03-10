// the reduce method returns a single value from an array

// it takes a callback function with two parameters: "the first parameter is accumulator and the second parameter is currentValue."

// reduce can take a second argument, which will be used as the initial value for the accumulator

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(
   (accumulator, currentValue) => {
   console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return currentValue + accumulator;
  }, 10 // first parameter}, optional second parameter
);

console.log(newSum);
