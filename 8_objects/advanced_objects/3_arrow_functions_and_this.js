// arrow functions do not have `this` so don't use them together
// https://javascript.info/arrow-functions

  // checkEnergy: () => {
  //   console.log(`Energy is currently at ${this.energyLevel}%.`)
  // }


const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
};

robot.checkEnergy();
