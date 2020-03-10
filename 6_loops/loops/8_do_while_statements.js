// A do while loop can be used when the loop body needs to execute at least once regardless of the condition being truthy

// Write your code below
// This program similates part of cake-baking

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

let addSugar = () => {
  do {
    cupsAdded ++;
  } while (cupsAdded < cupsOfSugarNeeded);
}

addSugar();
console.log(cupsAdded); // 4

cupsOfSugarNeeded = 0;
cupsAdded = 0;

addSugar();
console.log(cupsAdded); // 1
