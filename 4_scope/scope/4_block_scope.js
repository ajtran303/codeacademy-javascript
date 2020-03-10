// A variable has block scope when it is defined in a block. They are known as local variables and are only accessible to code within the {block}.

// Calling a local variable in the global scope will log a ReferenceError

let logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();

console.log(lightWaves);
