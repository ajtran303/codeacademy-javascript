// JS does not have built-in privacy for objects.

// privacy wrt objects is the idea that only certain properties should be accessible or mutable by other objects

// naming conventions to signal to other developers: _prependUnderscore means don't change!

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
// changing this value affects how the recharge method interacts with it

robot.recharge() // this will fail - logical error, not syntax
