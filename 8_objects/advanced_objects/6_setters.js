// Setter methods have the same advantages as getter methods

// Their function is to update values of existing properties in an object

// calling a setter method just looks like re-assigning a value to a property

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if(typeof this._numOfSensors === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};

// setter method
robot.numOfSensors = 100;

// getter method
console.log(robot.numOfSensors);
