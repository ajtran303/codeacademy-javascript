// Getter methods retrieve and return values of attributes defined within an object by using `this`

// They can also perform other actions on data they access and return different values using conditionals

// properties cannot use the same name as the getter function

// this program uses a getter method to validate data and prevent the logical error caused by type coercion in the previous exercise

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof(this._energyLevel) === 'number') {
        return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};


// to access a getter method, use dot notation but no parentheses
console.log(robot.energyLevel);
