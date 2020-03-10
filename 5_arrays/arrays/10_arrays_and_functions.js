// Arrays can be mutated by code blocks within functions

// "pass-by-reference"

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

let removeElement = newArr => newArr.pop();

removeElement(concept);

console.log(concept);
