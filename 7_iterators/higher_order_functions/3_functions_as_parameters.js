// A "higher-order function" is a function that either accepts fxns as parameters or returns a fxn or both

// A function that is passed as a parameter and then later invoked is called a "callback function" -- it is invoked during the execution of the higher-order function

// callbacks are passed into a HOFXN by typing the fxn name without the parentheses

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, value) => {
    let call1 = func(value);
    let call2 = func(value);
    if (call1 === call2) {
        return call1;
    } else {
        return 'This function returned inconsistent results';
    }
};

checkConsistentOutput(addTwo, 2);

console.log(checkConsistentOutput(addTwo, 2)
);
